<script setup lang="ts">
interface Gig {
  monthLabel: string
  day: string
  venue: string
  city: string
  meta: string
  price: string
  tag?: string
  tagKind?: 'featured' | 'soldout'
  soldOut?: boolean
  href?: string
}

interface EventsData {
  eyebrow: string
  title: string
  sub: string
  archiveLabel: string
  items: Gig[]
}

defineProps<{ data: EventsData }>()
</script>

<template>
  <section id="events">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="gigs">
        <a
          v-for="(gig, i) in data.items"
          :key="i"
          class="gig"
          :class="{ 'sold-out': gig.soldOut }"
          :href="gig.href ?? '#'"
        >
          <div class="gig-date">
            <span class="month">{{ gig.monthLabel }}</span>{{ gig.day }}
          </div>
          <div class="gig-venue">
            <span class="name">
              {{ gig.venue }}
              <span v-if="gig.tag" class="gig-tag" :class="{ soldout: gig.tagKind === 'soldout' }">{{ gig.tag }}</span>
            </span>
            <span class="city">{{ gig.city }}</span>
          </div>
          <div class="gig-meta">
            {{ gig.meta }}<span class="price">{{ gig.price }}</span>
          </div>
          <div class="gig-arrow">{{ gig.soldOut ? '×' : '→' }}</div>
        </a>
      </div>

      <div class="cleaver-sep">{{ data.archiveLabel }}</div>
    </div>
  </section>
</template>
