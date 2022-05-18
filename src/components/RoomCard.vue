<template lang="">
  <div class="RoomCard">
    <div @click="$emit('roomInfoClick')" class="roomInfo">
      <img :src="room.image" alt="방 이미지" />
      <h4>{{ room.title }}</h4>
      <p>{{ room.price }}</p>
    </div>
    <div class="roomReport" @click="$emit('reportButtonClick', room.id)">
      <button>허위매물 신고</button>
      <span>신고 수 : {{ room.reportNum }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "RoomCard",
  props: {
    room: Object,
  },
};
</script>
<style lang="scss">
.RoomCard {
  padding: 1rem 0;

  .roomInfo {
    img {
      width: 100%;
    }
  }
}
</style>
