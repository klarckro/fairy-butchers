<script setup lang="ts">
interface ContactData {
  eyebrow: string
  title: string
  sub: string
  infoTitle: string
  infoBlurb: string
  channels: { label: string, value: string }[]
  subjects: string[]
  socials: { label: string, href: string, title: string }[]
  footerNote: string
}

defineProps<{ data: ContactData }>()

const { t } = useI18n()

// Form has no backend on this static deploy — mailto CTA below is the real contact path.
const formEnabled = false

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const sent = ref(false)

function handleSubmit() {
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
}
</script>

<template>
  <section id="contact">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="contact-grid">
        <form v-if="formEnabled" class="contact-form" @submit.prevent="handleSubmit">
          <div>
            <label for="contact-name">{{ t('contact.name') }}</label>
            <input id="contact-name" v-model="form.name" required :placeholder="t('contact.namePlaceholder')" />
          </div>
          <div class="row">
            <div>
              <label for="contact-email">{{ t('contact.email') }}</label>
              <input id="contact-email" v-model="form.email" required type="email" :placeholder="t('contact.emailPlaceholder')" />
            </div>
            <div>
              <label for="contact-subject">{{ t('contact.subject') }}</label>
              <select id="contact-subject" v-model="form.subject">
                <option v-for="s in data.subjects" :key="s">{{ s }}</option>
              </select>
            </div>
          </div>
          <div>
            <label for="contact-message">{{ t('contact.message') }}</label>
            <textarea id="contact-message" v-model="form.message" required :placeholder="t('contact.messagePlaceholder')" />
          </div>
          <div>
            <button type="submit" class="btn btn-primary">{{ sent ? t('contact.sent') : t('contact.send') }}</button>
          </div>
        </form>

        <div v-else class="contact-form contact-mailto">
          <p>{{ t('contact.mailBlurb') }}</p>
          <a class="btn btn-primary" :href="`mailto:${data.channels[0]?.value}`">{{ t('contact.mailCta') }}</a>
        </div>

        <aside class="contact-info">
          <h4>{{ data.infoTitle }}</h4>
          <p>{{ data.infoBlurb }}</p>

          <template v-for="c in data.channels" :key="c.label">
            <div class="channel">{{ c.label }}</div>
            <div class="value">{{ c.value }}</div>
          </template>
        </aside>
      </div>

      <div class="footer-bottom">
        <div>{{ data.footerNote }}</div>
        <div class="socials">
          <a v-for="s in data.socials" :key="s.label" :href="s.href" :title="s.title" target="_blank" rel="noopener">{{ s.label }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
