<template lang="">
  <div>컨테이너에유</div>
  <Post v-for="(post, i) in postData" :key="i" :post="post" />
</template>
<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    postData: Array,
  },
};
</script>
<style lang=""></style>
