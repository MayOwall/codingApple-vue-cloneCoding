<template lang="">
  <header>
    <h1>부동산 매매 어플</h1>
  </header>
  <nav>
    <a v-for="menu in menuBar">{{ menu }}</a>
  </nav>
  <main>
    <Advertisement />
    <button @click="priceSortLow">가격 낮은 순</button>
    <button @click="priceSortHigh">가격 높은 순</button>
    <button @click="priceSortName">가나다 순</button>
    <button @click="priceSortOrigin">원래대로 순</button>
    <transition name="fade">
      <Modal
        :clickedRoomCard="clickedRoomCard"
        :isModalOpen="isModalOpen"
        @modalClick="modalClick"
      />
    </transition>
    <RoomCard
      @roomInfoClick="roomInfoClick"
      @reportButtonClick="reportButtonClick($event)"
      @click="this.clickedRoomCard = room"
      :room="room"
      v-for="(room, i) in roomData"
    />
  </main>
</template>
<script>
import roomData from "./assets/roomData.js";
import Advertisement from "./components/Advertisement.vue";
import Modal from "./components/Modal.vue";
import RoomCard from "./components/RoomCard.vue";
export default {
  name: "App",
  components: {
    Advertisement,
    Modal,
    RoomCard,
  },
  data() {
    return {
      menuBar: ["home", "rooms", "info"],
      isModalOpen: false,
      clickedRoomCard: null,
      roomData: roomData,
      roomDataOrigin: [...roomData],
    };
  },
  methods: {
    roomInfoClick() {
      this.isModalOpen = true;
    },
    reportButtonClick(roomId) {
      this.roomData[roomId].reportNum++;
    },
    modalClick() {
      this.isModalOpen = false;
    },
    priceSortLow() {
      this.roomData.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    priceSortHigh() {
      this.roomData.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    priceSortName() {
      this.roomData.sort();
    },
    priceSortOrigin() {
      console.log([...this.roomDataOrigin]);
      this.roomData = [...this.roomDataOrigin];
    },
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  min-height: 100vh;
  border: 1px solid gray;
  text-align: center;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin: 0 0.5rem;
      padding: 0.5rem;
      color: white;
      background-color: black;
      border-radius: 0.5rem;
    }
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 1s;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-active {
    transition: all 1s;
  }
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
