// 网络请求
export default function request(url, data = {}, methods = 'POST') {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: {
        'content-type': 'json'
      },
      methods,
      success(res) {
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail(error) {
        reject(error);
      }
    });
  });
}
