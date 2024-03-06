<template>
  <div class="slider-box">
    <div class="slider-left-btn-box">
      <button class="slider-left-btn" @click="slideToLeftFunc">
        <icons icon-name="arrowLeft"/>
      </button>
    </div>
    <div id="slider-images-box" class="slider-images-content" >
      <div class="slider-image-box" v-for="image in sliderImages" :key="image">
        <img class="slider-image" :src="image" alt="room-image" />
      </div>
    </div>
    <div class="slider-right-btn-box">
      <button class="slider-right-btn" @click="slideToRightFunc">
        <icons icon-name="arrowRight"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import Icons from "~/components/Icons.vue";

let sliderImages = ref([
  "/rooms/2-room(1).jpg",
  "/rooms/2-room(2).jpg",
  "/rooms/2-room(3).jpg",
  "/rooms/2-room(4).jpg",
  '/rooms/2-room(5).jpg'
]);

function slideToRightFunc() {
  let elem: HTMLElement | null = document.getElementById('slider-images-box')
  if(elem) elem.scrollLeft += 240
}
function slideToLeftFunc() {
  let elem: HTMLElement | null = document.getElementById('slider-images-box')
  if(elem) {
    if (elem && elem.scrollLeft < 0) {
      elem.scrollLeft = 0;
      return
    }
    elem.scrollLeft -= 240
  }
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
.slider-right-btn {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.slider-left-btn {
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.slider-images-content {
  display: flex;
  width: 1100px;
  overflow: hidden;
  scroll-behavior: smooth;

}
.slider-image-box {
  padding: 10px;

}


.slider-image {
  width: 500px;
  height: 350px;
}
</style>
