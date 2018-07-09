<template>
    <footer id="nav">
      <Tabbar
        >
        <tabbar-item 
          v-for="(item, index ) in tabList" 
          :key="item.title" 
          :to="item.to" 
          :title="item.title" 
          :img="item.img" 
          :index="index"
          />
      </Tabbar>
    </footer>
</template>
<script>
import Tabbar from '@/components/Tabbar/Tabbar';
import TabbarItem from '@/components/Tabbar/Tabbar-item';
export default {
  data() {
    return {
      tabList: [
        {
          to: "/index",
          title: "首页",
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530101449356&di=cc5ebcccfdb8e7eb345cd8b7a3f059fe&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F39%2F36%2F39573cb9f24018a.jpg"
        },
        {
          to: "/category",
          title: "分类",
        },
        {
          to: "/shoppingCart",
          title: "购物车",
        }
      ],
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  created() {
    console.log( this.$route);
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>