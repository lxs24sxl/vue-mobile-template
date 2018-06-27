<template>
  <div>
      <app-main></app-main>
      <tab-bar></tab-bar>
  </div>
</template>

<script>
import { TabBar, AppMain } from "./components/index";  
export default {
  name: "index",
  components: {
    TabBar,
    AppMain
  },
  data() {
    return {
      
    }
  },
  created() {
    // console.log("appMain");
  }
}
</script>

<style lang="scss" scoped>

</style>