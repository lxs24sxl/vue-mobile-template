<template>
  <div>
    <div>
      <Header 
        color="black"
        :hasBack="hasBack"
        :back="backTo"
        :hasMore="hasMore"
        title="首页"
        >
        <div slot="sheet1">test1</div>
        <div slot="sheet2">test2</div>
        <div slot="sheet3">test3</div>
        <div slot="sheet4">test4</div>
      </Header>
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
      hasBack: true,
      hasMore: true,
    }
  },
  created() {

  },
  methods: {
    backTo() {
      console.log("backTo");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>