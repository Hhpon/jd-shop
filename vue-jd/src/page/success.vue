<template>
  <!-- 支付成功页面 -->
  <div>
    <!-- 顶部 -->
    <div class="header">
      <!-- <img @click="back" src="../../static/img/back.png" alt=""> -->
      <span class="headerText">订单支付成功</span>
      <!-- <img src="../../static/img/lookMore.png" alt=""> -->
    </div>

    <div class="order">
      <img src="../../static/img/order.png" alt="">
      <div class="orderItem">
        <div>
          <span class="orderItemTitle">支付方式：</span>
          <span class="orderItemText">银行卡支付</span>
        </div>
        <div>
          <span class="orderItemTitle">订单金额：</span>
          <span class="orderItemText">￥{{order.price}}</span>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="btns">
      <button class="btn" @click="orderDetail">查看订单</button>
      <button class="btn" @click="goBack">返回首页</button>
    </div>

    <!-- 提示信息 -->
    <div class="attention">注意：京东平台及销售商不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作。</div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      order: {}
    };
  },
  created() {
    this.order = this.$route.params.order;
    this.time = this.order.orderNum;
    console.log(this.order);
    axios
      .post("http://localhost:7001/addOrder", {
        userName: localStorage.userName,
        order: this.order
      })
      .then(res => {
        console.log(res.data);
      });
  },
  methods: {
    orderDetail() {
      this.$router.push({ 'path': '/orderDetail' });
    },
    goBack() {
      this.$router.push({ 'path': '/' });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/success.scss";
</style>
