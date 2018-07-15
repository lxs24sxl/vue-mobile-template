<template>
  <div :class="{'detail-wrapper': true, 'active': isInit}">
    detail
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInit: false
    }
  },
  created() {
    this.isInit = true
  }
}
</script>

<style lang="scss" scoped>
.detail-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: yellowgreen;
  color: #fff;
  position: fixed;
  left: 0;
  top: .88rem;
  z-index: 9999;
}
.detail-wrapper.active {
  animation: animL100 .4s ease;
}
@keyframes animL100 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>