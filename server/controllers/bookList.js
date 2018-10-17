const { mysql } = require('../qcloud');
module.exports = async ctx => {
  const bookList = await mysql('books').select('*');
  ctx.state.data = bookList;
};
