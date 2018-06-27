<template>
  <div class="tabbar-wrapper">
    <ul class="xs-tabbar">
      <slot></slot>
    </ul>
  </div>  
</template>

<script>
export default {
  name: "xsTabbar",

  componentName: "xsTabbar",

  props: {
    current: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
$tabHeight: .98rem;
.tabbar-wrapper {
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 0.12rem;
  width: 100%;
  height: $tabHeight;
  border-top: 0.02rem solid #eee;
  .xs-tabbar {
    display: flex;
    height: $tabHeight;
    flex-direction: row;
    align-items: center;
  }
}
</style>

