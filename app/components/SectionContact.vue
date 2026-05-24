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

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const sent = ref(false)

function handleSubmit() {
  sent.value = true
  // In a real deploy this would POST to a serverless function / email service.
  setTimeout(() => { sent.value = false }, 4000)
}
</script>

<template>
  <section id="contact">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="contact-grid">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div>
            <label for="contact-name">Name</label>
            <input id="contact-name" v-model="form.name" required placeholder="Your name" />
          </div>
          <div class="row">
            <div>
              <label for="contact-email">Email</label>
              <input id="contact-email" v-model="form.email" required type="email" placeholder="you@somewhere.ch" />
            </div>
            <div>
              <label for="contact-subject">Subject</label>
              <select id="contact-subject" v-model="form.subject">
                <option v-for="s in data.subjects" :key="s">{{ s }}</option>
              </select>
            </div>
          </div>
          <div>
            <label for="contact-message">Message</label>
            <textarea id="contact-message" v-model="form.message" required placeholder="Tell us what's up." />
          </div>
          <div>
            <button type="submit" class="btn btn-primary">{{ sent ? 'Sent ✚' : 'Send it ✚' }}</button>
          </div>
        </form>

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
          <a v-for="s in data.socials" :key="s.label" :href="s.href" :title="s.title">{{ s.label }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
