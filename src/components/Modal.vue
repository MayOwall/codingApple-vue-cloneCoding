<template lang="">
  <div class="Modal" v-if="isModalOpen">
    <div class="Modal__content">
      <img :src="clickedRoomCard.image" />
      <h4>{{ clickedRoomCard.title }}</h4>
      <p>{{ clickedRoomCard.content }}</p>
      <p>{{ clickedRoomCard.price }}</p>
      <input type="range" min="1" max="12" />
      <input v-model.number="month" />
      <p>{{ month }} 개월 : {{ clickedRoomCard.price * month }}</p>
      <button @click="$emit('modalClick')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    isModalOpen: Boolean,
    clickedRoomCard: Object,
  },
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(a, b) {
      console.log(typeof a);
      if (typeof a !== "number") {
        alert("숫자만 입력하세요");
      }
    },
  },
  methods: {
    // modalClick(event) {
    //   console.log(event.target);
    // },
  },
};
</script>
<style lang="scss">
.Modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 5rem;

  .Modal__content {
    width: 15rem;
    height: 25rem;
    background-color: white;

    img {
      width: 100%;
    }
  }
}
</style>
