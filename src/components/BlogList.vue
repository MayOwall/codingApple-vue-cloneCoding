<template lang="">
  <div v-for="blog in blogListDataOrigin" :id="blog.number">
    <a
      :href="'detail/' + blog.number"
      style="color: black; text-decoration: none"
    >
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.content }}</p>
      <p>{{ blog.date }}</p>
    </a>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    blogListData: Object,
  },
  data() {
    return {
      blogListDataOrigin: [...this.blogListData],
    };
  },
};
</script>
<style lang="scss"></style>
