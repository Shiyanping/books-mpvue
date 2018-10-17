// 配置项

const host = 'http://192.168.101.12:5757';

const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  handleAddBook: `${host}/weapp/addBook`,
  getBookList: `${host}/weapp/bookList`
};

export default config;
