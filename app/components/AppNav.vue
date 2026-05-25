<script setup lang="ts">
const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const sections = ['events', 'music', 'members', 'about', 'support', 'contact'] as const
const activeId = ref<string>('events')
const menuOpen = ref(false)

const links = computed(() => [
  { id: 'events', label: t('nav.events') },
  { id: 'music', label: t('nav.music') },
  { id: 'members', label: t('nav.members') },
  { id: 'about', label: t('nav.about') },
  { id: 'support', label: t('nav.support') },
  { id: 'contact', label: t('nav.contact') }
])

const otherLocale = computed(() => (locale.value === 'en' ? 'de' : 'en'))
const switchLabel = computed(() => (locale.value === 'en' ? 'DE' : 'EN'))

function smoothScrollTo(id: string) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function handleNavClick(e: MouseEvent, id: string) {
  e.preventDefault()
  smoothScrollTo(id)
}

function updateActive() {
  const scrollY = window.scrollY + 120
  let current = sections[0] as string
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= scrollY) current = id
  }
  activeId.value = current
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', updateActive, { passive: true })
  window.addEventListener('resize', updateActive)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActive)
  window.removeEventListener('resize', updateActive)
})
</script>

<template>
  <nav class="nav" :class="{ 'menu-open': menuOpen }">
    <div class="nav-inner">
      <a href="#top" class="brand" @click="(e) => handleNavClick(e, 'top')">
        <span class="mark" />
        <span><span class="word">Fairy</span> <span class="dot">✚</span> <span class="word">Butchers</span></span>
      </a>
      <div class="nav-links">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          :class="{ active: activeId === l.id }"
          @click="(e) => handleNavClick(e, l.id)"
        >{{ l.label }}</a>
      </div>
      <NuxtLink class="lang-switch" :to="switchLocalePath(otherLocale)" :aria-label="`Switch to ${switchLabel}`">
        {{ switchLabel }}
      </NuxtLink>
      <button class="nav-cta" type="button" @click="smoothScrollTo('events')">
        {{ t('nav.getTickets') }}
      </button>
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="t('nav.toggleMenu')"
        @click="menuOpen = !menuOpen"
      >{{ menuOpen ? '×' : '☰' }}</button>
    </div>
  </nav>
</template>
