<template>
  <div class="rooms-book__rooms-book-box">
    <div class="rooms-book-box__select-options">
      <div class="select-options__date-input-box">
        <div class="date-input-box__input-section">
          <input
            id="min-date"
            class="input-section__input"
            :class="{'errorInput': userDataError.input}"
            type="date"
            @input="changeInputDateFunc"
          />
          <Icons class="calendar-icon" icon-name="calendar" />
        </div>
      </div>
      <div class="select-options__date-input-box">
        <div class="date-input-box__input-section">
          <input
            id="max-date"
            class="input-section__input"
            :class="{'errorInput': userDataError.output}"
            type="date"
            @input="changeOutputDateFunc"
          />
          <Icons class="calendar-icon" icon-name="calendar" />
        </div>
      </div>
      <div class="select-options__room-select-box">
        <select class="room-select-box__select" :class="{'errorInput': userDataError.room}" @change="onChangeRoomCountFunc">
          <option selected disabled>Room Count</option>
          <option value="1">1 Room</option>
          <option value="2">2 Room</option>
          <option value="3">3 Room</option>
        </select>
      </div>
      <div class="select-options__pet-radio-blocks">
        <div class="pet-radio-blocks__title">
          <p>Do You Have a Pet?</p>
        </div>
        <div class="pet-radio-blocks__radio-block">
          <input
            class="pet-radio"
            id="pet_yes"
            type="radio"
            name="pet"
            value="1"
            :checked="userData.pet"
            @input="onHavePetFunc"
          />
          <label for="pet_yes">Yes</label>
          <input
            class="pet-radio"
            id="pet_no"
            type="radio"
            name="pet"
            value="0"
            :checked="!userData.pet"
            @input="onHavePetFunc"
          />
          <label for="pet_no">No</label>
        </div>
      </div>
    </div>
    <div class="rooms-book-box__user-data-box">
      <div class="user-data-box__name-box">
        <input
          class="user-data-input"
          :class="{ errorInput: userDataError.name }"
          placeholder="Name"
          type="text"
          v-model="userData.name"
          @input="nameValidateFunc"
        />
      </div>
      <div class="user-data-box__email-box">
        <input
          class="user-data-input"
          :class="{ errorInput: userDataError.email }"
          placeholder="Email"
          type="text"
          v-model="userData.email"
          @input="emailValidateFunc"
        />
      </div>
      <div class="user-data-box__phone-box">
        <input
          class="user-data-input"
          :class="{ errorInput: userDataError.phone }"
          placeholder="Phone"
          type="text"
          v-model="userData.phone"
          @input="phoneValidateFunc"
        />
      </div>
      <div class="user-data-box__reserve-button-box">
        <button class="reserve-button-box__button" @click="onReserveRoomFunc">
          Reserve
        </button>
      </div>
    </div>
  </div>
  <template v-if="isShowModal">
    <Modal title="Reserved" @close-modal="onCloseModalFunc">
      <template #body>
        You have successfully reserved a room, our employee will contact you
      </template>
    </Modal>
  </template>
</template>

<script setup lang="ts">
import Modal from "~/components/Modal.vue";

let isShowModal = ref(false)

const userDataError = ref<any>({
  input: false,
  output: false,
  room: false,
  name: false,
  email: false,
  phone: false,
});
const userData = ref<any>({
  input: "",
  output: "",
  room: "",
  pet: false,
  name: "",
  email: "",
  phone: "",
});
function onCloseModalFunc() {
  isShowModal.value = false
}
const onReserveRoomFunc = () => {
  for (let key in userData.value) {
    if (key === "pet") continue;
    userDataError.value[key] = userData.value[key] === "";
  }
  if(Object.values(userDataError.value).filter(item => !item).length === 6) {
    isShowModal.value = true
  }
};
const changeInputDateFunc = (input: any): void => {
  userData.value.input = input.target.value;
  let outputDate: any = document.getElementById("max-date");
  outputDate.min = input.target.value;
};
const changeOutputDateFunc = (output: any): void => {
  userData.value.output = output.target.value;
  let inputDate: any = document.getElementById("min-date");
  inputDate.max = output.target.value;
};
const onChangeRoomCountFunc = (count: any): void => {
  userData.value.room = count.target.value;
};
const onHavePetFunc = (e: any): void => {
  userData.value.pet = !!e.target.value;
};
const nameValidateFunc = (input: any): void => {
  let value = input.target.value;
  userData.value.name = value.replace(/[^+[A-Za-z]/g, "");
};
const emailValidateFunc = (input: any): void => {
  let val = input.target.value;
  let reg = /^[A-Za-z0-9]+(@gmail.com)|(@mail.ru)$/g;
  setTimeout(() => (userDataError.value.email = val && !reg.test(val)), 500);
};
const phoneValidateFunc = (input: any): void => {
  let value = input.target.value;
  userData.value.phone = value.replace(/[^+\d]/g, "");
};
function setMinDateFunc(): void {
  let minDate: any = document.getElementById("min-date");
  let maxDate: any = document.getElementById("max-date");
  const date = new Date();
  let day: string = date.getDate() + "";
  day = +day < 10 ? "0" + day : day;
  let month: string = date.getMonth() + 1 + "";
  month = +month < 10 ? "0" + month : month;
  let year: string = date.getFullYear() + "";

  if (minDate && maxDate) {
    minDate.min = `${year}-${month}-${day}`;
    maxDate.min = `${year}-${month}-${day}`;
  }
}
onMounted(() => setMinDateFunc());
</script>

<style scoped>
.errorInput {
  border: none !important;
  box-shadow: 0 0 2px 2px red !important;
}

.rooms-book__rooms-book-box {
  border: 1px solid white;
  padding: 2vh 6vw;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  width: 90%;
}
.rooms-book-box__select-options {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.date-input-box__input-section {
  position: relative;
  display: inline-block;
}
.input-section__input {
  position: relative;
  padding: 8px 12px;
  font-family: sans-serif;
  background-color: #b2924a;
  border-radius: 8px;
  border: 1px solid white;
  box-shadow: 0 0 1px 1px lightgrey;
  color: whitesmoke;
  font-size: 16px;
}
.input-section__input::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  right: 0;
  bottom: 0;
  color: transparent;
  opacity: 0;
  cursor: pointer;
}
.calendar-icon {
  position: absolute;
  width: 20px;
  top: -20px;
  right: 5px;
  z-index: 2;
  cursor: pointer;
}
.select-options__room-select-box {
}
.room-select-box__select {
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  font-family: sans-serif;
  background-color: #b2924a;
  border-radius: 8px;
  border: 1px solid white;
  box-shadow: 0 0 1px 1px lightgrey;
  color: whitesmoke;
  font-size: 16px;
}
.select-options__pet-radio-blocks {
  color: whitesmoke;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.pet-radio-blocks__radio-block {
  display: flex;
  align-items: baseline;
  column-gap: 2px;
}
.pet-radio {
  position: relative;
  margin-right: 8px;
}
.pet-radio::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: white;
  border: 2px solid white;
}
.pet-radio:checked::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: #b2924a;
  border: 2px solid white;
}

.rooms-book-box__user-data-box {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8px 0;
}
.user-data-input {
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid white;
  font-family: sans-serif;
  border-radius: 8px;
  color: whitesmoke;
  outline: none;
  transition: box-shadow 500ms;
}
.user-data-input:focus {
  box-shadow: 0 0 1px 1px white;
}
.user-data-input::placeholder {
  color: white;
  font-family: sans-serif;
}
.user-data-box__reserve-button-box {
}
.reserve-button-box__button {
  cursor: pointer;
  padding: 8px 24px;
  background-color: #b2924a;
  outline: none;
  color: whitesmoke;
  border: 1px solid white;
  border-radius: 8px;
  font-family: sans-serif;
}
.reserve-button-box__button:hover {
  background-color: rgba(178, 146, 74, 0.8);
}
</style>
