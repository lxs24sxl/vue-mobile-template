<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div>
      <app-main></app-main>
      <tab-bar></tab-bar>
      
    </div>
  </div>
</template>

<script>
import { TabBar, AppMain } from "./components/index";  
import Header from "@/components/Header/index";  
export default {
  name: "index",
  components: {
    TabBar,
    AppMain,
    Header
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