// 网络请求
export default function request(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method,
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
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
