<template>
  <div class="main">
    <div class="content">
      <div class="resort-content">
        <div class="resort-content__title">
          <h3 class="titles-style hide" id="firstTitle">Welcome To Palma Resort</h3>
        </div>
      </div>
      <div class="about-content">
        <div class="about-content-bg-image"></div>
        <div class="about-content__about-description">
          <div class="about-description__title-box">
            <h3 class="titles-style hide" id="aboutTitle">About Us</h3>
          </div>
          <div class="about-description__description-box">
            <div id="lPalm" class="about-palm-left">
            </div>
            <p>Welcome to Palma Resort - an oasis of luxury and comfort, where every moment turns into an unforgettable experience. We offer the perfect combination of first-class service, exquisite amenities and breathtaking nature to make your holiday unique.
            </p>
            <p>Our resort is located in a picturesque corner of nature, away from the noise of the city bustle. Palma Resort is a place where luxury meets comfort and service exceeds expectations. Our rooms are equipped with everything you need for a pleasant and carefree stay, providing you with the highest level of satisfaction.
            </p>
            <p>Our team is made up of professionals dedicated to creating an environment of exceptional service. We strive to provide Palma Resort guests with a unique experience that will remain in their memories for years to come. We are proud that we can please even the most sophisticated tastes.
            </p>
            <p>
              Palma Resort is not just a place to relax, it is a world of comfort and luxury, where every moment becomes a memory of an ideal vacation. We invite you to an unforgettable journey into the world of true pleasure and relaxation.
            </p>
            <div id="rPalm" class="about-palm-right"></div>
          </div>
        </div>
      </div>
      <div class="rooms-content">
        <div class="rooms-content__bg-image"></div>
        <div class="rooms-content__title">
          <h3 id="roomTitle" class="titles-style">Choose Your Room</h3>
        </div>
        <div class="rooms-content__rooms-aside">
          <div class="rooms-aside__rooms-slide">
            <Slider/>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onRotatePalmFunc} from "~/components/templates/index/utils/rotatePalm";
import {onShowTtitleFunc} from "~/components/templates/index/utils/showTitles";


onMounted(() => onShowTtitleFunc('firstTitle', 'show'))

if(process.client) {
  window.addEventListener('scroll', function() {
    let aboutSection = document.getElementById('aboutTitle')
    let roomTitle = document.getElementById('roomTitle')
        if(aboutSection && aboutSection.getBoundingClientRect().top - window.scrollY < -100) {
          onShowTtitleFunc('aboutTitle','show')
          onRotatePalmFunc('show')
        } else {
          onRotatePalmFunc('hide')
          onShowTtitleFunc('aboutTitle', 'hide')
        }
        if(roomTitle && roomTitle.getBoundingClientRect().top - window.scrollY < -300) {
          onShowTtitleFunc('roomTitle', 'show')
        } else {
          onShowTtitleFunc('roomTitle', 'hide')
        }
  })
}


</script>

<style scoped>
@import "assets/css/resort.css";
@import "assets/css/about.css";
@import "assets/css/rooms.css";

.hide {
  opacity: 0;
}
.show {
  opacity: 1;
}
.main {
  width: 100%;
}
.titles-style {
  font-family: sans-serif;
  font-size: 40px;
  color: whitesmoke;
  width: 95vw;
  text-align: center;
  text-shadow: 1px 1px 8px black;
}
#firstTitle {
  transition: opacity 1s;
}
#aboutTitle {
  transition: all 800ms;
}
#roomTitle {
  transition: all 800ms;
}







</style>
