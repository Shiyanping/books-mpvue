<template>
  <div class="rate">
    <span>☆☆☆☆☆</span>
    <div class="hollow" :style="style">
      ★★★★★
    </div>
  </div>
</template>
<script>
export default {
  name: 'Rate',
  props: {
    value: {
      type: [Number, String],
      default: '0'
    }
  },
  computed: {
    style() {
      return `width:${this.value / 2}em`;
    }
  }
};
</script>
<style lang="stylus" scoped>
.rate
  position relative
  margin-right 5px
  color #ff5645
  .hollow
    position absolute
    display inline-block
    top 0
    left 0
    width 2em
    overflow hidden
</style>
