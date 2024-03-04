<template>
  <div class="slider-box">
    <div class="slider-left-btn-box">
      <button class="slider-left-btn">Left</button>
    </div>
    <div class="slider-images-content">
      <div class="slider-image-box" v-for="image in sliderImages" :key="image">
        <img class="slider-image" :src="image" alt="room-image" />
      </div>
    </div>
    <div class="slider-right-btn-box">
      <button class="slider-right-btn" @click="slideToRightFunc">Right</button>
    </div>
  </div>
</template>

<script setup lang="ts">
let slideToRight = ref(0)
let sliderImages = ref([
  "/rooms/2-room(1).jpg",
  "/rooms/2-room(2).jpg",
  "/rooms/2-room(3).jpg",
  "/rooms/2-room(4).jpg",
    '/rooms/2-room(5).jpg'
]);

function slideToRightFunc() {

}
</script>

<style scoped>
.slider-box {
  display: flex;
  width: max-content;
  overflow: hidden;
}
.slider-left-btn-box {
  display: flex;
  align-items: center;
}
.slider-right-btn-box {
  display: flex;
  align-items: center;
}
.slider-images-content {
  display: flex;
  width: 1100px;
}
.slider-image-box {
  padding: 10px;
}
.slider-image {
  width: 500px;
  height: 350px;
}
</style>
