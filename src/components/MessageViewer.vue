<script setup>
const props = defineProps({
  message: { type: Object },
});
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between gap-2">
    <div>{{ message.content || "图片" }}</div>
    <div>
      <img
        v-if="message.image"
        :src="message.image"
        class="h-24 w-auto"
        alt="笔记图片"
      />
    </div>
  </div>
</template>
