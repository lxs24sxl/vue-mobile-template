<template>
  <div>
    主页
    <div @click="goToDetail">跳到detail页面</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log("zhuye");
  },
  methods: {
    goToDetail() {
      this.$router.push({ path: "/detail"});
    }
  }

}
</script>

<style>
</style>