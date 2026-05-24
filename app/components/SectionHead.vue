<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  sub: string
}>()
</script>

<template>
  <div class="section-head">
    <div>
      <div class="section-num">{{ eyebrow }}</div>
      <h2 class="section-title" v-html="title.replace(/\n/g, '<br>')" />
    </div>
    <p class="section-sub">{{ sub }}</p>
  </div>
</template>
