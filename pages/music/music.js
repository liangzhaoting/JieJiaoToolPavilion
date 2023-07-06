// pages/music/music.js
// 获取应用实例
const app = getApp()
const utils = require('../../utils/util.js')

Page({
  data: {
    musicList: [],
  },

  getRandMusic() {
    let that = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: `${utils.hostUrl}/musicList`,
      method: 'GET',
      success(res) {
        that.setData({
          musicList: res.data.data
        })
      },
      fail(error) {
        console.log(error)
      },
      complete() {
        wx.hideNavigationBarLoading()
      }
    })
  },

  onLoad() {
    this.getRandMusic();
  },
  /**
   * 页面下拉触顶事件的处理函数
   */
  onPullDownRefresh: function () {
    this.getRandMusic();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
})