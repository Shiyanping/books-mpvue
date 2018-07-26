import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/me/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff5645',
      navigationBarTitleText: '图书',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      selectedColor: '#34b546',
      list: [{
        pagePath: 'pages/books/main',
        text: '图书',
        iconPath: 'static/image/books.png',
        selectedIconPath: 'static/image/books-click.png'
      }, {
        pagePath: 'pages/comments/main',
        text: '评论',
        iconPath: 'static/image/books.png',
        selectedIconPath: 'static/image/books-click.png'
      }, {
        pagePath: 'pages/me/main',
        text: '我的',
        iconPath: 'static/image/me.png',
        selectedIconPath: 'static/image/me-click.png'
      }]
    }
  }
};
