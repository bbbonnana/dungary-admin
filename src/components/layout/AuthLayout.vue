<!-- 登录页 -->
<template>
  <div class="app-layout app-layout--auth">
    <div class="auth-form-box center-block">
      <router-view @switch="toggleFormType"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    toggleFormType(type) {
      this.$router.replace({ name: type === 'login' ? 'register' : 'login' })
    }
  }
}

</script>
<style lang="scss">
.auth-form-box {
  width: 600px;
  height: 400px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transform: translateX(-50%) translateY(-60%);
  color: $color-text-primary;
}
</style>
