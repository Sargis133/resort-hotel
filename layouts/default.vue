<template>
<div>
  <div class="header-content">
    <Header />
  </div>
  <div class="content-page">
    <NuxtPage/>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header-content {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.content-page {
}
</style>