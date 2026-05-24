<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <div class="marquee-band">
    <div class="track">
      <span v-for="(item, i) in Array.from({ length: 6 }, (_, k) => items[k % items.length])" :key="i">
        {{ item }} <span class="star">✚</span>
      </span>
    </div>
  </div>
</template>
