<!-- Header -->
<template>
  <div class="app-header">
    <span>当前管理员：{{ username }}</span>
    <div class="app-header-mask"><span>注销</span></div>
  </div>
</template>

<script>

export default {
  computed: {
    username() {
      return this.$store.state.manager.username
    }
  }
}

</script>

<style lang="scss">
.app-header {
  position: relative;
  height: $header-height;
  color: $color-primary;
  text-align: center;
  border-bottom: 1px solid $color-border-light;
  &:hover .app-header-mask {
    opacity: 1;
  }
}

.app-header-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  background-color: $color-warning;
  opacity: 0;
  transition: all .5s;
}
</style>
