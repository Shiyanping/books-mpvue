<template>
  <div>
    这是我的页面
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
    <button @click="handleScanCode">调起扫码</button>
  </div>
</template>

<script>
import config from '@/utils/config';
import request from '@/utils/request';
import utils from '@/utils/utils';
export default {
  async created() {
    console.log(utils.dateFormat(new Date(), 'yyyy-MM-dd'));
    const res = await request(config.host, {}, 'GET');
    console.log(res);
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

<style scoped>
</style>
