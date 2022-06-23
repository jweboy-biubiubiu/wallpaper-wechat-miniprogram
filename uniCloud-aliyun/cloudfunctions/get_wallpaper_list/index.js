// 云函数入口函数
exports.main = async (event, context) => {
  const db = uniCloud.database();
  const res = await db.collection('wallpaper').get()

  return { items: res.data, total: res.data.length }
}
