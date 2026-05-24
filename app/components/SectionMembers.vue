<script setup lang="ts">
interface Member {
  number: string
  stageName: string
  aka: string
  role: string
  photo?: string
}

interface MembersData {
  eyebrow: string
  title: string
  sub: string
  items: Member[]
}

defineProps<{ data: MembersData }>()
</script>

<template>
  <section id="members">
    <div class="container">
      <SectionHead :eyebrow="data.eyebrow" :title="data.title" :sub="data.sub" />

      <div class="member-grid">
        <article v-for="m in data.items" :key="m.number" class="member">
          <div
            class="member-photo"
            :data-label="m.photo ? '' : '[ DROP MEMBER PHOTO ]'"
            :style="m.photo ? { backgroundImage: `url('${m.photo}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined"
          >
            <span class="number">{{ m.number }}</span>
          </div>
          <div class="member-info">
            <h3 class="stage-name">{{ m.stageName }}</h3>
            <div class="real">{{ m.aka }}</div>
            <div class="role">{{ m.role }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
