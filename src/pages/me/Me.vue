<template>
  <div>
    这是我的页面
    <div class="image"></div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
    <button @click="handleScanCode">调起扫码</button>
  </div>
</template>

<script>
import config from '@/http/api';
import request from '@/http/request';
import utils from '@/utils/index';
export default {
  async created() {
    console.log(utils.dateFormat(new Date(), 'yyyy-MM-dd'));
    const res = await request(config.host, {}, 'GET');
    console.log(res);
  },
  mounted() {
    console.log(this.$root.$mp.appOptions);
  },
  methods: {
    onGotUserInfo(e) {
      console.log(e.target.userInfo);
    },
    handleScanCode() {
      wx.scanCode({
        success: res => {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.image
  width 20px
</style>
