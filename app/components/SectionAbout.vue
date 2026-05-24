<script setup lang="ts">
interface AboutData {
  eyebrow: string
  title: string
  sub: string
  paragraphs: string[]
  stats: { num: string, label: string }[]
}

defineProps<{ data: AboutData }>()
</script>

<template>
  <section id="about">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="about-grid">
        <div class="about-text">
          <p v-for="(p, i) in data.paragraphs" :key="i">{{ p }}</p>

          <div class="about-stats">
            <div v-for="s in data.stats" :key="s.label" class="stat">
              <div class="num">{{ s.num }}</div>
              <div class="label">{{ s.label }}</div>
            </div>
          </div>
        </div>
        <div class="about-logo">
          <img src="/assets/logo-circle.jpeg" alt="Fairy Butchers logo" />
        </div>
      </div>
    </div>
  </section>
</template>
