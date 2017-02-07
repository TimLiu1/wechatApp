// pages/detail/index.js


let service = require('../../utils/service')

Page({
  data: {
    start: '2016-09-01',
    birthday: '2017-01-01',
    array: ['1-7天', '7-15天'],
    plans: ['计划A', '计划B', '计划C']
  },
  bindStartChange: function (e) {
    this.setData({
      start: e.detail.value
    })
  },

  bindBirthdayChange: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  onLoad: function (options) {
    console.log(options);
    let that = this;
    service.getProductDetail({_id:options._id}, function (err, result) {
      console.log(result);
      that.setData({
        product: result.data
      })
    })



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
  }
})