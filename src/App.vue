<script>
export default {
  created() {
    wx.login({
      success: function(res) {
        if (res.code) {
          // 发起网络请求
          console.log(res);
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  }
};
</script>

<style>
</style>
