// pages/buy/index.js
let service = require('../../utils/service')


Page({
  data: {
    start: '2016-09-01',
    birthday: '2017-01-01',
    array: ['1-7天', '7-15天'],
    paperType: ['身份证', '军官证', '驾照']
  },

  onLoad: function (options) {
   
    // 页面初始化 options为页面跳转所带来的参数
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  submitOrder: function () {
    wx.showModal({
      title: '提示',
      content: '确定提交订单吗',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  }
})