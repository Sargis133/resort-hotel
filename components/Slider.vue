<template>
  <div class="slider-box">
    <div class="slider-left-btn-box">
      <button class="slider-left-btn">Left</button>
    </div>
    <div class="slider-images-content">
      <div class="slider-image-box">
        <img class="slider-image" src="/assets/images/rooms/2-room(1).jpg" alt="room-image">
      </div>
      <div class="slider-image-box">
        <img class="slider-image" src="/assets/images/rooms/2-room(2).jpg" alt="room-image">
      </div>
      <div class="slider-image-box">
        <img class="slider-image" src="/assets/images/rooms/2-room(3).jpg" alt="room-image">
      </div>
      <div class="slider-image-box">
        <img class="slider-image" src="/assets/images/rooms/2-room(4).jpg" alt="room-image">
      </div>
      <div class="slider-image-box">
        <img class="slider-image" src="/assets/images/rooms/2-room(5).jpg" alt="room-image">
      </div>
    </div>
    <div class="slider-right-btn-box">
      <button class="slider-right-btn">Right</button>
    </div>
  </div>

</template>

<script setup lang="ts">

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