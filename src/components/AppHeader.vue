<script setup>
const isDark = useDark({
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <div class="btn btn-ghost text-xl">Durain Stacks</div>
    </div>
    <div class="flex flex-none gap-2">
      <button class="btn" @click="toggleDark()">
        {{ isDark ? "Dark" : "Light" }}
      </button>
      <div class="avatar placeholder">
        <div class="w-12 rounded-full bg-neutral text-neutral-content">
          <span class="text-center text-3xl">A</span>
        </div>
      </div>
    </div>
  </div>
</template>
