<template>
<!-- 注册页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <img @click="back" src="../../static/img/back.png" alt="">
      <span class="headerText">京东注册</span>
      <div class="block"></div>
    </div>

    <!-- 注册 -->
    <div class="signUp">
      <input v-model="userName" type="text" placeholder="请输入用户名">
      <input v-model="telNum" type="text" placeholder="请输入手机号">
      <input v-model="password" type="password" placeholder="请输入密码">
      <input v-model="passwordAgain" type="password" placeholder="请再次输入密码">
      <div class="btn">
        <button class="signUpBtn" @click="signUp">注册</button>
        <button class="loginBtn" @click="login">已有账号，去登录</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userName: "",
      telNum: "",
      password: "",
      passwordAgain: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

    // 判断用户输入的信息是否符合几个简单的条件，若符合则传递数据到后端查询数据库
    signUp() {
      if (
        this.userName === "" ||
        this.telNum === "" ||
        this.password === "" ||
        this.passwordAgain === ""
      ) {
        alert("请将注册信息填写完整！");
      } else {
        if (this.userName.length < 4) {
          alert("用户名不得少于4位！");
        } else {
          if (this.telNum.length !== 11) {
            alert("请输入正确的手机号！");
          } else {
            if (this.password !== this.passwordAgain) {
              alert("两次输入的密码不一致！");
            } else {
              axios.post('http://localhost:7001/signUp', 
              { userName: this.userName, telNum: this.telNum, password: this.password }).then(result => {
                var result = result.data;
                if (result === '注册成功！') {
                  alert(result);
                  this.$router.push({ 'path': '/login' });
                } else {
                  alert(result);
                }
              })
            }
          }
        }
      }
    },

    // 去登录
    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/signUp.scss";
</style>
