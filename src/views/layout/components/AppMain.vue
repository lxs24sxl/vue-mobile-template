<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  margin-top: .88rem;
}
</style>