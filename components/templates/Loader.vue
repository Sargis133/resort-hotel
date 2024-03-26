<template>
<div class="loader-content">
  <div class="loader-content__loader-box">
    <div class="loader-box__loader">
      <div class="loader-rotate"></div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.loader-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
}
.loader-content__loader-box {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 100%;
}
.loader-box__loader {
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
}
.loader-rotate {
  position: absolute;
  border-left: 5px solid gray;
  border-radius: 50%;
  transform: rotate(0deg);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: rotate infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>