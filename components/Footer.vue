<template>
<div class="footer-box">
  <div class="footer-box__footer-items-list">
    <ul class="footer-items-list__items-list">
      <li>Phone - <span>+(4)-584-484-584</span></li>
      <li>|</li>
      <li>Email - <span>palmaresort@gmail.com</span></li>
      <li>|</li>
      <li>Address - <span>Bali, St. Pantai Legian</span></li>
    </ul>
    <div class="footer-items-list__copyright-box">
      <p class="copyright-box__text">© Copyright 2024 - Palma Resort</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer-box {
  background-color: rgba(0,0,0, 0.9);
  display: flex;
  justify-content: center;
}
.footer-box__footer-items-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px;
}
.footer-items-list__items-list {
  color: #E7E1D7;
  font-family: sans-serif;
  font-size: 15px;
  display: flex;
  justify-content: center;
  column-gap: 8px;
}
.footer-items-list__copyright-box {
  text-align: center;
  padding: 15px;
  color: #A59E8E;
  font-family: sans-serif;
  font-size: 14px;
}
.footer-items-list__items-list li span {
  font-size: 14px;
  font-style: italic;
}
</style>