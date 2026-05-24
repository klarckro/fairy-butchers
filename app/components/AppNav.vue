<script setup lang="ts">
const sections = ['events', 'music', 'members', 'about', 'support', 'contact'] as const
const activeId = ref<string>('events')
const menuOpen = ref(false)

const links = [
  { id: 'events', label: 'Events' },
  { id: 'music', label: 'Our Music' },
  { id: 'members', label: 'Members' },
  { id: 'about', label: 'About' },
  { id: 'support', label: 'Support' },
  { id: 'contact', label: 'Contact' }
]

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
      <button class="nav-cta" type="button" @click="smoothScrollTo('events')">Get Tickets ✚</button>
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >{{ menuOpen ? '×' : '☰' }}</button>
    </div>
  </nav>
</template>
