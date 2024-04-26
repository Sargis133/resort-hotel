<template>
  <div class="slider-box">
    <div class="slider-left-btn-box">
      <button class="slider-left-btn" @click="slideToLeftFunc">
        <icons icon-name="arrowLeft" icon-class="fill: white;"/>
      </button>
    </div>
    <div id="slider-images-box" class="slider-images-content" >
      <div class="slider-image-box" v-for="image in sliderImages" :key="image">
        <img class="slider-image" :src="image" alt="room-image" />
      </div>
    </div>
    <div class="slider-right-btn-box">
      <button class="slider-right-btn" @click="slideToRightFunc">
        <icons icon-name="arrowRight" icon-class="fill: white;"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import Icons from "~/components/Icons.vue";

let sliderImages = ref([
  "images/rooms/2-room(1).jpg",
  "images/rooms/2-room(2).jpg",
  "images/rooms/2-room(3).jpg",
  "images/rooms/2-room(4).jpg",
  'images/rooms/2-room(5).jpg'
]);

function slideToRightFunc() {
  let image = document.querySelector('.slider-image')
  let imageWidth = image?.clientWidth
  let elem: HTMLElement | null = document.getElementById('slider-images-box')
  if(elem && imageWidth) elem.scrollLeft += imageWidth - 100
}
function slideToLeftFunc() {
  let image = document.querySelector('.slider-image')
  let imageWidth = image?.clientWidth
  let elem: HTMLElement | null = document.getElementById('slider-images-box')
  if(elem && imageWidth) {
    if (elem && elem.scrollLeft < 0) {
      elem.scrollLeft = 0;
      return
    }
    elem.scrollLeft -= imageWidth - 100
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
  width: 90vw;
  overflow: hidden;
  scroll-behavior: smooth;
}
.slider-image-box {
  padding: 10px;

}


.slider-image {
  width: 50vw;
  height: 100%;
}

@media (max-width: 600px) {
  .slider-left-btn, .slider-right-btn {
    width: 65px;
    display: flex;
    align-items: center;
  }
  .slider-images-content {
    max-width: 90vw;
    width: 100%;
    padding: 0 20px;
  }
  .slider-box {
    display: grid;
    grid-template-columns: 65px auto 65px;
  }
}
</style>
