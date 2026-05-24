<script setup lang="ts">
interface Video {
  title: string
  kind: string
  length: string
  year?: string
  featured?: boolean
  badge?: string
  thumb?: string
  thumbPosition?: string
  href?: string
}

interface MusicData {
  eyebrow: string
  title: string
  sub: string
  items: Video[]
}

defineProps<{ data: MusicData }>()

function thumbStyle(v: Video) {
  if (!v.thumb) return undefined
  return {
    backgroundImage: `url('${v.thumb}')`,
    backgroundPosition: v.thumbPosition ?? 'center'
  }
}
</script>

<template>
  <section id="music">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="music-grid">
        <a
          v-for="(v, i) in data.items"
          :key="i"
          class="video-card"
          :class="{ featured: v.featured }"
          :href="v.href ?? '#'"
        >
          <div class="placeholder-thumb" />
          <div v-if="v.thumb" class="thumb" :style="thumbStyle(v)" />
          <span v-if="v.badge" class="badge">{{ v.badge }}</span>
          <div class="play" />
          <div class="info">
            <div class="title-line">{{ v.title }}</div>
            <div class="meta">
              <span>{{ v.kind }}</span>
              <span class="pink">{{ v.length }}</span>
              <span v-if="v.year">{{ v.year }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
