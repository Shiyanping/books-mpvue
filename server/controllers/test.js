module.exports = async (ctx, next) => {
  // 具体查看：
  ctx.state.data = {
    msg: 'hello,小程序'
  }
}
