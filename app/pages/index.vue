<script setup lang="ts">
const { locale, t } = useI18n()
const suffix = computed(() => `_${locale.value}` as const)

const { data: site } = await useAsyncData(`site-${locale.value}`,
  () => queryCollection(`site${suffix.value}` as 'site_en' | 'site_de' | 'site_pt').first())
const { data: events } = await useAsyncData(`events-${locale.value}`,
  () => queryCollection(`events${suffix.value}` as 'events_en' | 'events_de' | 'events_pt').first())
const { data: music } = await useAsyncData(`music-${locale.value}`,
  () => queryCollection(`music${suffix.value}` as 'music_en' | 'music_de' | 'music_pt').first())
const { data: members } = await useAsyncData(`members-${locale.value}`,
  () => queryCollection(`members${suffix.value}` as 'members_en' | 'members_de' | 'members_pt').first())
const { data: sponsors } = await useAsyncData(`sponsors-${locale.value}`,
  () => queryCollection(`sponsors${suffix.value}` as 'sponsors_en' | 'sponsors_de' | 'sponsors_pt').first())

useHead({
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') }
  ]
})
</script>

<template>
  <div v-if="site && events && music && members && sponsors">
    <aside class="side-label">{{ site.sideLabel }}</aside>

    <AppNav />
    <AppHero :data="site.hero" />
    <MarqueeBand :items="site.marquee" />
    <SectionEvents :data="events" />
    <SectionMusic :data="music" />
    <SectionMembers :data="members" />
    <SectionAbout :data="site.about" />
    <SectionSupport :data="sponsors" />
    <SectionContact :data="site.contact" />
  </div>
</template>
