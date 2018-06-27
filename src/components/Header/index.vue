<template>
  <div class="header-wrapper">
    <slot name="left"></slot>
    <div>
      header
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
$headerHeight: .88rem;
.header-wrapper {
  height: $headerHeight;
  width: 100%;
  background-color: #26a2ff;
  color: #fff;
  font-size: .34rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>