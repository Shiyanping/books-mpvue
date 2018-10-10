<template>
  <div class="container">
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin" class="user-info">
      <img :src="userInfo.avatarUrl" alt="">
      <p>{{userInfo.nickName}}</p>
    </button>
    <year-progress></year-progress>

    <button class="btn" @click="scanBook">添加图书</button>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk';
import config from '@/http/api';
import { showSuccess } from '@/utils/index';
import YearProgress from '@/components/YearProgress';
export default {
  data() {
    return {
      userInfo: {
        avatarUrl: '/static/image/avator.png',
        nickName: '请先登录'
      },
      logged: null
    };
  },
  components: {
    YearProgress
  },
  created() {
    const userInfo = wx.getStorageSync('userinfo');
    if (userInfo) {
      this.userInfo = userInfo;
    }
    qcloud.setLoginUrl(config.loginUrl);
  },
  mounted() {
    console.log(this.$root.$mp.appOptions);
  },
  methods: {
    scanBook() {
      wx.scanCode({
        success: res => {
          console.log(res);
        }
      });
    },
    doLogin() {
      const session = qcloud.Session.get();

      if (session) {
        // 第二次登录
        // 或者本地已经有登录态
        // 可使用本函数更新登录态
        qcloud.loginWithCode({
          success: res => {
            console.log(res);
            this.userInfo = res;
            this.logged = true;
          },
          fail: err => {
            console.error(err);
          }
        });
      } else {
        // 首次登录
        qcloud.login({
          success: res => {
            console.log(res);
            showSuccess('登录成功');
            wx.setStorageSync('userinfo', res);
            this.userInfo = res;
            this.logged = true;
          },
          fail: err => {
            console.error(err);
          }
        });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/mixin.styl'
.user-info
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 20px 0
  background #ffffff
  img
    width 90px
    height 90px
    border-radius 50%
  p
    text-align center
    margin-top 20px
.user-info::after
  border none
</style>
