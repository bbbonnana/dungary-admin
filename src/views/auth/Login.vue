<!-- 管理员登录 -->
<template>
  <div class="auth-wrap" v-loading="loading">
    <h1 class="auth-form-title">请先登录</h1>
    <el-form
      ref="loginForm"
      hide-required-asterisk
      :model="form"
      :rules="loginRule"
      label-width="120px"
    >
      <el-form-item prop="username" label="管理员用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <div class="auth-form-footer">
      <div class="auth-form-footer__operate">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <el-button type="text" @click="toRegister">注册管理员</el-button>
      <!-- <el-button @click="test">test</el-button> -->
    </div>
  </div>
</template>

<script>
// import { testPms } from '@/api/index'

export default {
  data() {
    const loginRule = Object.freeze({
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    })
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      loginRule
    }
  },
  methods: {
    toRegister() {
      this.$emit('switch', 'login')
    },
    // test() {
    //   testPms()
    //     .then(res => {
    //       debugger
    //     })
    //     .catch(err => {
    //       debugger
    //       err
    //     })
    // },
    login() {
      new Promise((resolve, reject) => {
        this.loading = true
        this.$refs.loginForm.validate(valid => {
          if (!valid) {
            return reject(new Error('请输入正确登录信息'))
          }
          resolve()
        })
      }).then(() => {
        return this.$store.dispatch('manager/login', {
          username: this.form.username,
          password: this.form.password
        })
      }).then((res) => {
        this.$ms.success(res.message)
      }).catch(err => this.$ms.error(err.message))
        .finally(() => { this.loading = false })
    }
  }
}

</script>
<style lang="scss">
@import './common.scss';
</style>
