<script setup lang="ts">
interface HeroData {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  tagHtml: string
  primaryCta: string
  ghostCta: string
  ribbonTag: string
  ribbonItems: string[]
}

defineProps<{ data: HeroData }>()

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-photo" aria-hidden="true" />
    <div class="hero-text">
      <div class="hero-eyebrow">{{ data.eyebrow }}</div>
      <h1>
        <span class="stamp">{{ data.titleLine1 }}</span>
        <span class="pink stamp">{{ data.titleLine2 }}</span>
      </h1>
      <p class="hero-tag" v-html="data.tagHtml" />
      <div class="hero-actions">
        <button class="btn btn-primary" type="button" @click="scrollTo('events')">
          {{ data.primaryCta }}
        </button>
        <button class="btn btn-ghost" type="button" @click="scrollTo('music')">
          {{ data.ghostCta }}
        </button>
      </div>
    </div>

    <div class="hero-ribbon">
      <div class="ribbon-tag">{{ data.ribbonTag }}</div>
      <div class="ribbon-marquee">
        <span v-for="(item, i) in [...data.ribbonItems, ...data.ribbonItems]" :key="i">
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>
