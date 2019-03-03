const { mysql } = require('../qcloud');
module.exports = async ctx => {
  const bookList = await mysql('books')
    .select('books.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
    .orderBy('books.id', 'desc');

  ctx.state.data = {
    bookList: bookList.map(v => {
      const userInfo = JSON.parse(v.user_info);
      return Object.assign(v, {
        nickName: userInfo.nickName
      });
    })
  };
};
