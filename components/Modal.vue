<template>
<div class="modal-box">
  <div class="modal-box__modal-section">
    <div class="modal-section__modal-title">
      <h4 class="modal-title__text">
        {{ modalTitle }}
      </h4>
    </div>
    <div class="modal-section__modal-body">
      <slot name="body"/>
    </div>
    <div class="modal-section__modal-footer">
      <div class="modal-footer__modal-button">
        <button class="modal-button__button" @click="$emit('closeModal', true)">Ok</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string,
}>()
const emits = defineEmits<{
  (event: 'closeModal', value: boolean): void
}>()

const modalTitle = computed(() => props.title || "")
</script>

<style scoped>
.modal-box {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-box__modal-section {
  border-radius: 15px;
  width: 40%;
  background-color: whitesmoke;
}
.modal-section__modal-title {
  display: flex;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid gray;
  border-radius: 15px 15px 0 0;
  padding: 5px 10px;
  background-color: #BFBFBF;
}
.modal-title__text {
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 100;
}
.modal-section__modal-body {
  padding: 10px;
  font-family: sans-serif;
}
.modal-section__modal-footer {
  padding-top: 8px;
}
.modal-footer__modal-button {
  display: flex;
  justify-content: end;
}
.modal-button__button {
  border: none;
  border-radius: 8px 0 8px 0;
  padding: 8px 18px;
  background-color: #00BDFF;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  box-shadow: -1px -1px 1px 1px #00BDFF;
  cursor: pointer;
}
</style>