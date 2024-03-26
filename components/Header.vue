<template>
  <div class="header-box">
    <div class="header-box__header-logo-aside">
      <div class="header-logo-aside__header-logo-box">
        <img
          class="header-logo-box__logo-image"
          src="/assets/images/logo/logo.png"
          alt="logo"
        />
        <button class="header-logo-box__title" @click="onScrollToTopFunc">Palma Resort</button>
      </div>
    </div>
    <div class="header-content__header-navbar-aside">
      <div class="header-navbar-aside__header-navbar-list">
        <ul>
          <li>
            <button
              class="header-navbar-list__button"
              @click="onScrollToAboutFunc"
            >
              About
            </button>
          </li>
          <li>
            <button
              class="header-navbar-list__button"
              @click="onScrollToRoomsFunc"
            >
              Rooms
            </button>
          </li>
          <li class="header-navbar-list__contacts-box">
            <button
              class="header-navbar-list__button"
              @click="onShowContactsFunc"
            >
              Contacts
            </button>
            <div
              class="header-navbar-list__contacts-options-box"
              :class="{ hide: !isShowContacts }"
            >
              <div class="contacts-options-box__contact-item">
                <NuxtLink
                  class="contact-item__link"
                  to="https://www.facebook.com/?locale=ru_RU"
                  target="_blank"
                >
                  <icons icon-name="facebook" />
                  <p>Facebook</p>
                </NuxtLink>
              </div>
              <div class="contacts-options-box__contact-item">
                <NuxtLink
                  class="contact-item__link"
                  to="https://www.google.com/intl/ru/gmail/about/"
                  target="_blank"
                >
                  <icons icon-name="gmail" />
                  <p>Gmail</p>
                </NuxtLink>
              </div>
              <div class="contacts-options-box__contact-item">
                <NuxtLink
                  class="contact-item__link"
                  to="https://www.instagram.com/"
                  target="_blank"
                >
                  <icons icon-name="instagram" />
                  <p>Instagram</p>
                </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-content__header-book-room">
      <button class="header-book-room__button" @click="onScrollToBookFunc">
        BOOK NOW
      </button>
    </div>
    <div class="header-content__burger-menu">
      <button class="burger-menu__icon-button" @click="onOpenBurgerMenuFunc">
        <icons icon-name="burger" />
      </button>
      <div class="burger-menu__burger-items-box" :class="{'show-burger-menu': isShowBurgerMenu}">
        <div class="burger-items-box__close-burger-button">
          <button class="close-burger-button__button" @click="onCloseBurgerMenu">
            <icons icon-name="close"/>
          </button>
        </div>
        <ul class="burger-items-box__burger-items-list">
          <li><button @click="onScrollToAboutFunc" class="burger-items-list__button">About</button></li>
          <li><button @click="onScrollToRoomsFunc" class="burger-items-list__button">Rooms</button></li>
          <li><button @click="onScrollToBookFunc" class="burger-items-list__button">Book Now</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

let isShowBurgerMenu = ref(false)
let isShowContacts = ref(false);

function onOpenBurgerMenuFunc() {
  isShowBurgerMenu.value = true
}
function onCloseBurgerMenu() {
  isShowBurgerMenu.value = false
}
function onShowContactsFunc() {
  isShowContacts.value = !isShowContacts.value;
}

function onScrollToTopFunc() {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}
function onScrollToBookFunc() {
  let bookBox = document.querySelector('.rooms-aside__rooms-book')
  if(bookBox) {
    scrollTo({
      left: 0,
      top: bookBox.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth",
    });
  }
}
function onScrollToRoomsFunc() {
  let roomsBox = document.querySelector(".rooms-aside__rooms-slide");
  if (roomsBox) {
    scrollTo({
      left: 0,
      top: roomsBox.getBoundingClientRect().top + window.scrollY - 135,
      behavior: "smooth",
    });
  }
}
function onScrollToAboutFunc() {
  if (route.path === "/") {
    scrollToAbout();
  } else if (route.path !== "/") {
    navigateTo("/");
    setTimeout(() => scrollToAbout(), 500);
  }

  function scrollToAbout() {
    let aboutContent: HTMLElement | null =
      document.querySelector(".about-content");
    if (aboutContent) {
      window.scrollTo({
        top: aboutContent.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
</script>

<style scoped>
.hide {
  opacity: 0;
}

.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.header-box__header-logo-aside {
  display: flex;
  align-items: center;
}
.header-logo-aside__header-logo-box {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}
.header-logo-aside__header-logo-box:hover .header-logo-box__logo-image {
  transition: all 800ms ease-in;
  transform: rotate(-15deg);
}
.header-logo-box__logo-image {
  transition: all 800ms;
  transform: rotate(-7deg);
  width: 60px;
  position: absolute;
  top: -20px;
  left: -10px;
  border-radius: 15px;
  filter: drop-shadow(1px 0 4px forestgreen);
}
.header-logo-box__title {
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 18px;
  padding-left: 30px;
}

.header-navbar-aside__header-navbar-list ul {
  display: flex;
  grid-column-gap: 5px;
}
.header-navbar-list__button {
  background-color: transparent;
  border: none;
  color: white;
  font-family: sans-serif;
  font-size: 17px;
}
.header-navbar-list__button:hover {
  color: grey;
  cursor: pointer;
  transition: color 500ms;
}
.header-content__header-book-room {
}
.header-book-room__button {
  font-family: sans-serif;
  cursor: pointer;
  border: 1px solid #fee80a;
  background-color: transparent;
  padding: 5px 15px;
  color: #fee80a;
  border-radius: 10px;
  transition: background-color 500ms;
}
.header-book-room__button:hover {
  background-color: #fee80a;
  color: black;
}
.header-navbar-list__contacts-options-box {
  position: absolute;
  transition: opacity 500ms;
  top: 30px;
  z-index: 70;
  background-color: rgba(0, 0, 0, 0.8);
}
.header-navbar-list__contacts-box {
  position: relative;
}
.header-content__burger-menu {
  display: none;
  position: relative;
}
.burger-menu__icon-button {
  background-color: transparent;
  border: none;
}
.show-burger-menu {
  right: -10px !important;
}
.burger-menu__burger-items-box {
  transition: right 1s;
  position: absolute;
  z-index: 80;
  right: -200px;
  top: -10px;
  padding: 10px;
  min-width: 150px;
  height: max-content;
  background-color: rgba(0,0,0, 0.8);
}
.burger-items-box__close-burger-button {
  display: flex;
  justify-content: end;
}
.close-burger-button__button {
  background-color: transparent;
  border: none;
}
.burger-items-box__burger-items-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
}
.burger-items-list__button {
  background-color: transparent;
  border: none;
  color: whitesmoke;
  font-family: sans-serif;
  font-size: 16px;
  text-decoration: underline;
}
.contacts-options-box__contact-item {
  padding: 5px;
}
.contact-item__link {
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: whitesmoke;
  font-family: sans-serif;
}
.contact-item__link:hover {
  opacity: 0.8;
}

@media (max-width: 600px) {
  .header-content__header-navbar-aside, .header-content__header-book-room {
    display: none;
  }
  .header-content__burger-menu {
    display: block;
  }
}
</style>
