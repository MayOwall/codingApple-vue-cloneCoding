<template>
  <Nav />
  <router-view :blogListData="blogListData"></router-view>
</template>
<script>
import blogListData from "./assets/blogListData.js";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      blogListData,
    };
  },
};
</script>
<style lang=""></style>
