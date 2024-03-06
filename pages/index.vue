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
        <div class="rooms-content__title">
          <h3 class="titles-style">Choose Your Room</h3>
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
function onShowTextOpacity(id: string, type: string) {
  let elem: HTMLElement | null = document.getElementById(id)
    if (elem) {
      if(type === 'show') {
        elem.classList.remove('hide')
        elem.classList.add('show')
      } else {
        elem.classList.remove('show')
        elem.classList.add('hide')
      }
    }
}
function onRotatePalm(type: string) {
  let lPalm: HTMLElement | null = document.getElementById('lPalm');
  let rPalm: HTMLElement | null = document.getElementById('rPalm');
  if(lPalm && rPalm) {
    if(type === 'show') {
      lPalm.style.cssText = 'transform: rotate(-16deg); left: -150px;transition: all 2s;'
      rPalm.style.cssText = 'transform: rotate(16deg); right: -150px; transition: all 2s;'
    } else {
      lPalm.style.cssText = 'transform: rotate(0deg); left: 0; transition: all 1s;'
      rPalm.style.cssText = 'transform: rotate(0deg); right: -30px; transition: all 1s;'
    }
  }
}

onMounted(() => onShowTextOpacity('firstTitle', 'show'))

if(process.client) {
  window.addEventListener('scroll', function() {
    let aboutSection = document.getElementById('aboutTitle')
        if(aboutSection && aboutSection.getBoundingClientRect().top - window.scrollY < -100) {
          onShowTextOpacity('aboutTitle','show')
          onRotatePalm('show')
        } else {
          onRotatePalm('hide')
          onShowTextOpacity('aboutTitle', 'hide')
        }

  })
}


</script>

<style scoped>

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
  width: 100vw;
  text-align: center;
  text-shadow: 1px 1px 8px black;
}

.resort-content {
  background-image: url("assets/images/main/resort-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 20em 20em;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

#firstTitle {
  transition: opacity 1s;
}

.about-content {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}
.about-content-bg-image {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  background-image: url("assets/images/main/about-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(1px);
}
.about-content__about-description {
  display: flex;
  flex-direction: column;
  grid-column-gap: 20px;
  justify-content: center;
}
.about-description__title-box {
  display: flex;
  justify-content: center;
}
#aboutTitle {
  transition: all 1s;
}
.about-description__description-box {
  margin-top: 20px;
  text-align: center;
  background-color: rgba(0,0,0, 0.8);
  padding: 2em 10em;
  position: relative;
  overflow: hidden;
}
.about-description__description-box p {
  color: whitesmoke;
  font-family: sans-serif;
  font-size: 17px;
  text-shadow: 1px 1px 8px black;
  margin-top: 20px;
}

.about-palm-left {
  width: 300px;
  height: 300px;
  background-image: url("assets/images/main/about-palm.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}
.about-palm-right {
  width: 300px;
  height: 300px;
  background-image: url("assets/images/main/about-right-palm.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  right: -36px;
}


.rooms-content {
  padding-top: 25px;
  background-image: url("assets/images/main/room-bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.rooms-content__title {
  display: flex;
  justify-content: center;
  padding: 15px;
}
.rooms-content__rooms-aside {
  padding: 20px;
}
.rooms-aside__rooms-slide {
  display: flex;
  justify-content: center;
}



</style>
