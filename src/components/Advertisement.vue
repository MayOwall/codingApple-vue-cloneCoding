<template lang="">
  <div class="Advertisement">지금 구매하면 {{ percentage }}% 할인</div>
</template>
<script>
export default {
  name: "Advertisement",
  data() {
    return {
      percentage: 30,
    };
  },
  mounted() {
    setInterval(() => {
      this.percentage--;
    }, 1000);
  },
};
</script>
<style lang="scss">
.Advertisement {
  width: 100%;
  height: 5rem;
  color: darkslateblue;
  background-color: lightblue;
  margin-top: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 5rem;
}
</style>
