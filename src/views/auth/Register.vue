<!-- 注册 -->
<template>
  <div class="auth-wrap" v-loading="loading">
    <h1 class="auth-form-title">注册管理员</h1>
    <el-form ref="registerForm" :rules="registerRule" :model="form" label-width="120px">
      <el-form-item prop="username" label="管理员用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item prop="passwordAg" label="再次输入密码">
        <el-input type="password" v-model="form.passwordAg"></el-input>
      </el-form-item>
    </el-form>
    <div class="auth-form-footer">
      <div class="auth-form-footer__operate">
        <el-button type="primary" @click="register">注册</el-button>
      </div>
      <el-button type="text" @click="toLogin">前往登录</el-button>
    </div>
  </div>
</template>

<script>
import {
  register,
  postManagerExist
} from '@/api/index'

export default {
  data() {
    const validateUn = (rule, value, cb) => {
      if (/(^_)|(_$)|(__)/.test(value)) {
        return cb(new Error('管理员用户名不能以_开头或结尾，且_不能连用'))
      }
      postManagerExist({ username: value })
        .then(res => {
          if (res.data) {
            return cb(new Error('该用户名已存在'))
          }
          cb()
        })
        .catch(err => console.error(err))
    }
    let count = 0
    const validatePassword = (rule, value, cb) => {
      const otherField = rule.field === 'password' ? 'passwordAg' : 'password'
      count++
      if (value !== this.form[otherField]) {
        cb(new Error('两次输入的密码不一致'))
      } else {
        cb()
      }
      if (count === 2) {
        count = 0 // 防止校验死循环
        return
      }
      this.$refs.registerForm.validateField(otherField, valid => {
        if (count === 1) {
          count = 0
        }
      })
    }

    const registerRule = Object.freeze({
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { pattern: /^\w{6,12}$/, message: '管理员用户名必须为6-12位的字母或数字，且不包含除_以外的特殊符号', trigger: 'blur' },
        { validator: validateUn, trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^.{6,16}$/, message: '密码必须为6-16位的字符', trigger: 'blur' },
        { validator: validatePassword, trigger: 'blur' }
      ],
      passwordAg: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { validator: validatePassword, trigger: 'blur' }
      ]
    })

    return {
      loading: false,
      form: {
        username: '',
        password: '',
        passwordAg: ''
      },
      registerRule
    }
  },
  methods: {
    toLogin() {
      this.$emit('switch', 'register')
    },
    register() {
      new Promise((resolve, reject) => {
        this.loading = true
        this.$refs.registerForm.validate(valid => {
          if (!valid) {
            return reject(new Error('请填写正确信息'))
          }
          resolve()
        })
      }).then(() => {
        const params = {
          username: this.form.username,
          password: this.form.password
        }
        return register(params)
      }).then(res => {
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
