<template>
  <div class="home">
    <p>测试一下事件总线</p>
    <button @click="sendMsg()">点击这个按钮,江父组件的数据传递</button>
    <Child1 />
    <Child2 />
  </div>
</template>

<script>
import Child1 from "../components/child1";

import Child2 from "../components/child2";

export default {
  name: "Home",
  data() {
    return {
      msg: "我是父组件home"
    };
  },
  components: {
    Child1,
    Child2
  },
  methods: {
    sendMsg() {
      //这里是用 事件总线 发送 发布监听模式
      this.$bus.$emit("MSGEVENT", this.msg);
    }
  },
  created() {
    this.$http.get("/login").then(
      res => {
        console.log(res);
      },
      () => {
        console.log("请求失败了");
      }
    );
  }
};
</script>

<style lang="less" scoped></style>
