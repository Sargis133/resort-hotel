<template>
  <template v-if="name === 'arrowRight'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80px"
      height="80px"
      viewBox="0 0 1024 1024"
      class="icon"
    >
      <path
        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
        fill="#000000"
      />
    </svg>
  </template>
  <template v-else-if="name === 'arrowLeft'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="80px"
      height="80px"
      viewBox="0 0 32 32"
    >
      <path
        d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"
      />
    </svg>
  </template>
  <template v-else><span></span></template>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
}>();
let name = ref(props.iconName);
</script>

<style scoped></style>
