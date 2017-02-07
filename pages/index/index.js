//获取应用实例
var app = getApp()
let service = require('../../utils/service')


let images = ["http://huibaoweb2.oss-cn-hangzhou.aliyuncs.com/spa/ruihengweb/bannerShop/banner1.png", "http://huibaoweb2.oss-cn-hangzhou.aliyuncs.com/spa/ruihengweb/bannerShop/banner2.png", "http://huibaoweb2.oss-cn-hangzhou.aliyuncs.com/spa/ruihengweb/bannerShop/banner3.png"];

Page({

    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false,
        images: images,
        // loading
    },

    //事件处理函数
    swiperchange: function (e) {
        //console.log(e.detail.current)
    },
    

    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据

            service.getProductList({}, function (err, result) {
               let products = result.data.products;
               console.log(products);
                that.setData({
                    userInfo: userInfo,
                    products:products
                })
            })



        })

        //sliderList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function (res) {
        //         that.setData({
        //             images: images
        //         })
        //     }
        // })

        // //venuesList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function (res) {
        //         that.setData({
        //             venuesItems: res.data.data
        //         })
        //         setTimeout(function () {
        //             that.setData({
        //                 loadingHidden: true
        //             })
        //         }, 1500)
        //     }
        // })

        // //choiceList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function (res) {
        //         that.setData({
        //             choiceItems: res.data.data.dataList
        //         })
        //         setTimeout(function () {
        //             that.setData({
        //                 loadingHidden: true
        //             })
        //         }, 1500)
        //     }
        // })

    }
})
