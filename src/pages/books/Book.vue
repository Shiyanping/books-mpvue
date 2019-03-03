<template>
  <div>
    <book-card v-for="item in bookList" :key="item.id" :data="item"></book-card>
  </div>
</template>

<script>
import config from '@/http/api';
import request from '@/http/request';
import BookCard from '@/components/BookCard';
export default {
  name: 'Books',
  data() {
    return {
      bookList: []
    };
  },
  created() {
    this.getBookList();
  },
  components: {
    BookCard
  },
  methods: {
    async getBookList() {
      // 加载导航栏 loading 效果
      wx.showNavigationBarLoading();

      const res = await request(config.getBookList);
      this.bookList = res.data.bookList;
      console.log(res.data);

      // 结束导航栏 loading 效果
      wx.hideNavigationBarLoading();

      // 加载成功时，停止下拉刷新
      wx.stopPullDownRefresh();
    }
  },
  onPullDownRefresh() {
    this.getBookList();
  }
};
</script>

<style scoped>
</style>
