<template lang="">
  <main>
    <h1>부동산 거래 어플</h1>
    <nav>
      <a v-for="(menu, i) in menus" :key="i">{{ menus[i] }}</a>
    </nav>
    <div class="modal" v-if="modalDisplay" @click="modalClick">
      <div class="modal__inner">
        <h4>상세 페이지 제목임</h4>
        <p>상세 페이지 내용임</p>
      </div>
    </div>
    <div
      class="roomInfo"
      v-for="room in rooms"
      :key="room.id"
      @click="modalClick"
    >
      <h4>{{ room.title }}</h4>
      <img :src="room.image" />
      <p>{{ room.content }}</p>
      <p>{{ room.price }}</p>
      <div class="reportButton">
        <button @click="room.reportNum++">허위매물신고</button>
        <span>신고수 : {{ room.reportNum }}</span>
      </div>
    </div>
  </main>
</template>
<script>
import roomData from "./assets/roomData.js";
export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      modalDisplay: false,
      rooms: roomData,
    };
  },
  methods: {
    modalClick(event) {
      const el = event.target.closest("div");
      console.log(el.className);
      if (el.className !== "modal__inner" && el.className !== "reportButton") {
        this.modalDisplay = !this.modalDisplay;
      }
    },
  },
};
</script>

<style lang="scss">
body {
  display: flex;
  justify-content: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 1rem 0;
  border: 1px solid;
  text-align: center;
  .modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 13rem;
      height: 20rem;
      background-color: white;
      border-radius: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: royalblue;
    width: 90%;
    height: 2rem;
    border-radius: 0.5rem;

    a {
      margin: 0 0.5rem;
      color: white;
    }
  }
  .roomInfo {
    img {
      width: 100%;
    }
  }
}
</style>
