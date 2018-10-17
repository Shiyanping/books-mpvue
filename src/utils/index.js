// 工具方法
/**
 * 时间格式化
 * 用法：utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
 * @param {string} date - 当前时间
 * @param {string} format - 格式化之后的格式
 */
export function dateFormat(date, format) {
  if (format === undefined) {
    format = date;
    date = new Date();
  }
  var map = {
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
    var v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - 2);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
}

export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  });
}

export function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  });
}
