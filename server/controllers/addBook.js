const https = require('https');
const { mysql } = require('../qcloud');

// 拿到isbn码 从豆瓣api中获取图书信息
module.exports = async (ctx, next) => {
  const { isbn, openId: openid } = ctx.request.body;

  if (isbn) {
    // 查询图书是否存在
    const checkResult = await mysql('books').select().where('isbn', isbn);
    if (checkResult.length !== 0) {
      ctx.body = {
        code: 500,
        msg: '图书已存在'
      };
      return;
    }

    // 如果图书不存在，根据isbn去豆瓣查询图书的基本信息
    // 并且将查询到的基本信息做处理，得到我们想要的数据
    let url = 'https://api.douban.com/v2/book/isbn/';

    const bookInfo = await getJSON(url + isbn);
    const { title, image, alt, publisher, summary, price } = bookInfo;
    const rate = bookInfo.rating.average;
    const tags = bookInfo.tags
      .map(item => {
        return item.name;
      })
      .join(',');
    const author = bookInfo.author.join(',');

    // 将处理的数据存入数据库中，mysql 添加做一个错误检测
    try {
      await mysql('books').insert({
        isbn,
        openid,
        title,
        image,
        alt,
        publisher,
        summary,
        price,
        rate,
        tags,
        author
      });
      ctx.body = {
        msg: '添加成功'
      };
    } catch (e) {
      ctx.body = {
        code: 500,
        msg: `添加失败${e.sqlMessage}`
      };
    }
  }
};

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let urlData = '';
      res.on('data', data => {
        urlData += data;
      });
      res.on('end', data => {
        const bookInfo = JSON.parse(urlData);
        if (bookInfo.title) {
          resolve(bookInfo);
        }
        reject(bookInfo);
      });
    });
  });
}
