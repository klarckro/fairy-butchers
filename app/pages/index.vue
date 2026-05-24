<script setup lang="ts">
const { data: site } = await useAsyncData('site', () => queryCollection('site').first())
const { data: events } = await useAsyncData('events', () => queryCollection('events').first())
const { data: music } = await useAsyncData('music', () => queryCollection('music').first())
const { data: members } = await useAsyncData('members', () => queryCollection('members').first())
const { data: sponsors } = await useAsyncData('sponsors', () => queryCollection('sponsors').first())

useHead({
  title: 'Fairy Butchers — Raw · Loud · Bloody Good',
  meta: [
    { name: 'description', content: 'Fairy Butchers — a rock band from Switzerland. Shows, music, and how to feed the beast.' }
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
