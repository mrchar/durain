<script setup>
const props = defineProps({ message: { type: Object } });
</script>

<template>
  <div class="flex h-full w-full flex-col gap-2">
    <div class="text-2xl">{{ message.content || "图片" }}</div>
    <div>
      <img
        v-if="message.image"
        :src="message.image"
        class="h-auto w-full rounded-lg"
        alt="图片"
      />
    </div>
  </div>
</template>
