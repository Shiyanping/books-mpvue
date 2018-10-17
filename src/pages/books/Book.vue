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
      const res = await request(config.getBookList);
      this.bookList = res.data;
      console.log(res.data);
    }
  }
};
</script>

<style scoped>
</style>
