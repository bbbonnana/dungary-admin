<!-- 页面主入口 -->
<template>
<div class="app-layout app-layout--main">
  <div class="left-side">
    <el-menu
      class="app-menu"
      :default-active="currentSelect"
      mode="vertical">
      <el-menu-item v-for="item in menu" :key="item.menuName" :index="item.menuName" :style="{padding: 0}">
        <router-link class="app-menu__link" :to="item.to">{{ item.title }}</router-link>
        <!-- <span>{{ item.title }}</span> -->
      </el-menu-item>
    </el-menu>
  </div>
  <div class="app-layout__view">
    <!-- <keep-alive> -->
    <router-view class="app-page"></router-view>
    <!-- </keep-alive> -->
  </div>
</div>
</template>

<script>
import menu from './menu'

const routeMap = {} // menuName -> to
menu.forEach(item => { routeMap[item.menuName] = item.to })

export default {
  data() {
    return {
      menu: Object.freeze(menu),
      currentSelect: ''
    }
  },
  created() {
    this.updateSelectByRoute()
  },
  watch: {
    $route(route) {
      this.updateSelectByRoute(route)
    }
  },
  methods: {
    // 根据路由更新菜单选中
    updateSelectByRoute(route) {
      route = route || this.$route
      let i = -1
      let menuName = this.menu[0].menuName
      const matched = route.matched
      while (++i < matched.length) {
        const target = matched[i].meta.menu
        if (target) {
          menuName = target
          break
        }
      }
      this.currentSelect = menuName
    }
  }
}
</script>

<style lang="scss">
.app-menu {
  border: none;
  &__link {
    display: block;
    padding-left: 20px;
  }
}
</style>
