<template>
  <div 
    :style="{'background-color': color,'color': fontColor, 'font-size': fontSize  }" 
    class="header-wrapper"
    >
    <!-- <slot name="left"></slot> -->
    <div 
      v-if="hasBack" 
      class="left back"
      @click="back"
      >返回</div>
    <div>
      {{ title }}
    </div>
    <!-- <slot name="right"></slot> -->
    <div 
      class="right more"
      @click="showSheet"
      >
      <div 
        v-if="isShowSheet" 
        :class="{'sheet-wrapper': true,'active': isShowSheet}"
        >
        <slot name="sheet1"></slot> 
        <slot name="sheet2"></slot> 
        <slot name="sheet3"></slot> 
        <slot name="sheet4"></slot> 
      </div>    
    </div>
    <div v-if="isShowSheet" class="sheet-bg" @click="hideSheet"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#26a2ff"
    },
    fontColor: {
      type: String,
      default: "#fff"
    },
    fontSize: {
      type: String,
      default: ".34rem"
    },
    hasBack: {
      type: Boolean,
      default: true
    },
    back: {
      type: Function,
      default: null
    },
    hasMore: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "默认标题"
    },
  },
  data() {
    return {
      isShowSheet: false
    }
  },
  methods: {
    showSheet() {
      this.isShowSheet = true;
    },
    hideSheet() {
      this.isShowSheet = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$headerHeight: .88rem;
.header-wrapper {
  height: $headerHeight;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  .left, .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
    font-size: .28rem;
    color: #eee;
  }
  .left {
    left: .30rem;
  }
  .left.back {
    left: .50rem;
    &:after {
      position: absolute;
      left: -.20rem;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
      content: "";
      width: .16rem;
      height: .16rem;
      border-left: .04rem solid #eee;
      border-top: .04rem solid #eee;
    }
  }
  .right {
    right: .50rem;
  }
  .more {
    width: .12rem;
    height: .12rem;
    border-radius: 50%;
    background-color: #eee;
    &::before, &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: .12rem;
      height: .12rem;
      background-color: #eee;
      border-radius: 50%;
    }
    &::before {
      left: -.20rem;
    }
    &::after {
      right: -.20rem;
    }
    .sheet-wrapper {
      position: absolute;
      right: -.3rem;
      top: .30rem;
      height: 0;
      width: 3rem;
      background-color: #fff;
      border-radius: .10rem;
      color: #666;
      line-height: .80rem;
      animation: showSheet .5s ease;
    }
    .sheet-wrapper.active {
      height: auto;
    }
  }
  .sheet-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: #000;
    opacity: .4;
  }
}
@keyframes showSheet {
  from {
    opacity: 0;
    transfrom: scale(0.6);
  }
  to {
    opacity: 1;
    transfrom: scale(1);
  }
}
</style>