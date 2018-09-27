<template>
  <div>
    这是图书页
  </div>
</template>

<script>
import request from '@/http/request';
import config from '@/http/api';
export default {
  name: 'Books',
  data() {
    return {};
  },
  async created() {
    const res = await request(`${config.host}/weapp/test`);
    console.log(res);
  }
};
</script>

<style scoped>
</style>
