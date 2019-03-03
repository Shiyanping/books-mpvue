<template>
  <div class="book-item">
    <div class="border-bottom book-info">
      <img :src="data.image" class="book-image">
      <div class="book-detail">
        <p v-text="data.title" class="book-title"></p>
        <p class="book-rate"><rate :value="data.rate"></rate>{{data.rate}}</p>
        <p v-text="data.author != '' ? data.author + '/' + data.publisher : data.publisher" class="book-author"></p>
        <div class="book-add-user">
          <p v-text="data.price" class="book-price"></p>
          <p v-text="'添加人：' + data.nickName"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rate from '@/components/Rate';
export default {
  name: 'BookCard',
  props: ['data'],
  components: {
    Rate
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/styles/mixin.styl'
.book-item
  width 100%
  padding-left 15px
  box-sizing border-box
  .book-info
    display flex
    justify-content flex-start
    align-items center
    padding 20px 0
    .book-image
      width 80px
      height 110px
      margin-right 10px
      border-radius 8px
    .book-detail
      flex 1
      padding-top 5px
      > p
        margin-bottom 8px
        color #9d9a9a
        width 100%
        no-wrap()
      .book-title
        font-size 16px
        font-weight 900
        color #000
        width 260px
      .book-rate
        display flex
        justify-content flex-start
        align-items center
        font-size 12px
      .book-author
        font-size 14px
      .book-add-user
        display flex
        align-items center
        justify-content space-between
        font-size 12px
        padding-right 15px
        box-sizing border-box
        .book-price
          color #ff5645
          font-size 16px
</style>
