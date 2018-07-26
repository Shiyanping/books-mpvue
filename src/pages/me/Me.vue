<template>
  <div>
    这是我的页面
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
  </div>
</template>

<script>
import config from '@/utils/config';
import request from '@/utils/request';
export default {
  async created() {
    const res = await request(config.host, {}, 'GET');
    console.log(res);
  },
  methods: {
    onGotUserInfo: function(e) {
      console.log(e.target.userInfo);
    }
  }
};
</script>

<style scoped>
</style>
