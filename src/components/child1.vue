<template>
  <div>
    这是child1组件:{{ child1 }}
    <button @click="sendMsg()">child1发送的信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child1: 1
    };
  },
  created() {
    this.$bus.$on("MSGEVENT", res => {
      console.log("这是子组件1的打印" + res);
      this.child1 = res;
    });
  },
  methods: {
    sendMsg() {
      this.$bus.$emit("MSGCHILD1", this.child1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
