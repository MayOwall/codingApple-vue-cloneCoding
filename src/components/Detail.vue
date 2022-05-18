<template lang="">
  <div>
    <h2>{{ blogListDataOrigin[$route.params.id].title }}</h2>
    <p>{{ blogListDataOrigin[$route.params.id].date }}</p>
    <p>{{ blogListDataOrigin[$route.params.id].content }}</p>
  </div>
</template>
<script>
export default {
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
<style lang=""></style>
