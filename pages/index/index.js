// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {},
  toMusic() {
    wx.navigateTo({
      url: '../music/music'
    })
  },

  onLoad() {
  },

})
