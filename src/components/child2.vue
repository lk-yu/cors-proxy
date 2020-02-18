<template>
  <div>这个就是child2组件{{ child2 }}</div>
</template>

<script>
export default {
  data() {
    return {
      child2: null
    };
  },
  created() {
    this.$bus.$on("MSGCHILD1", res => {
      console.log(res);
      this.child2 = res;
    });
  }
};
</script>

<style lang="scss" scoped></style>
