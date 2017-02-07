var app = getApp()


let service = require('../../utils/service')


let arrProductType = [
    { "key": "3", "value": "意外险" },
    { "key": "7", "value": "家财险" },
    { "key": "8", "value": "健康险" },
]


Page({
    data: {
        navLeftItems: [],
        navRightItems: [],
        curNav: 3,
        curIndex: 0
    },
    onLoad: function () {

        var that = this

         service.getProductList({ prodType: '3' }, function (err, result) {
            console.log(result.data);
            that.setData({
                products: result.data.products
            })
         })

        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function (res) {
                that.setData({
                    navLeftItems: arrProductType,
                    navRightItems: res.data
                })
            }
        })
    },

    //事件处理函数
    switchRightTab: function (e) {
        var that = this
        let id = e.target.dataset.id,
            index = parseInt(e.target.dataset.index);
             that.setData({
                curNav: id,
                curIndex: index,
            })
        service.getProductList({ prodType: id }, function (err, result) {
            console.log(result.data);
            that.setData({
                products: result.data.products
            })
        })

    }

})