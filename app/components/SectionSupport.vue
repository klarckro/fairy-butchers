<script setup lang="ts">
interface SupportCard {
  iconStamp: string
  kicker: string
  heading: string
  blurb: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
  ctaStyle: 'primary' | 'ghost'
}

interface SupportData {
  eyebrow: string
  title: string
  sub: string
  cards: SupportCard[]
}

defineProps<{ data: SupportData }>()
</script>

<template>
  <section id="support">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="support-grid">
        <div v-for="card in data.cards" :key="card.heading" class="support-card">
          <div class="icon-stamp">{{ card.iconStamp }}</div>
          <div class="kicker">{{ card.kicker }}</div>
          <h3>{{ card.heading }}</h3>
          <p>{{ card.blurb }}</p>
          <ul>
            <li v-for="b in card.bullets" :key="b">{{ b }}</li>
          </ul>
          <a class="btn" :class="card.ctaStyle === 'primary' ? 'btn-primary' : 'btn-ghost'" :href="card.ctaHref">
            {{ card.ctaLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
