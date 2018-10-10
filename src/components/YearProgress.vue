<template>
  <div class="progress-box">
    <progress :percent="percent" activeColor="#ff5645" />
    <p>{{nowYear}}年已经过去了{{diffDay}}天，{{percent}}%</p>
  </div>
</template>

<script>
export default {
  name: 'YearProgress',
  data() {
    return {};
  },
  methods: {
    isLeapYear() {
      const nowYear = new Date().getFullYear();
      if (nowYear % 400 === 0) {
        return true;
      } else if (nowYear % 4 === 0 && nowYear % 100 !== 0) {
        return true;
      } else {
        return false;
      }
    },
    isNowYearOfDay() {
      return this.isLeapYear() ? 366 : 365;
    }
  },
  computed: {
    nowYear() {
      return new Date().getFullYear();
    },
    diffDay() {
      let start = new Date();
      start.setMonth(0);
      start.setDate(1);
      let diffDate = new Date().getTime() - start.getTime();
      return parseInt(diffDate / 1000 / 60 / 60 / 24) + 1;
    },
    percent() {
      return (this.diffDay / this.isNowYearOfDay() * 100).toFixed(1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.progress-box
  padding 0 10px
  box-sizing border-box
  margin 20px 0
  p
    margin-top 10px
</style>
