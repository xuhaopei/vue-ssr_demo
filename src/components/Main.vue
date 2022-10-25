<template>
  <div>
    hello Main
    <button @click="add">{{ count }}</button>
    <img src="@/imgs/aaaa.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style></style>
