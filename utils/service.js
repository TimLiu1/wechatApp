let HOST = "http://121.40.121.237:9001/api/";
// get请求方法
function fetchGet(url, callback) {
    // return callback(null, top250)
    wx.request({
        url: url,
        header: { 'Content-Type': 'application/json' },
        success(res) {
            callback(null, res.data)
        },
        fail(e) {
            console.error(e)
            callback(e)
        }
    })
}

// post请求方法
function fetchPost(url, data, callback) {
    wx.request({
        method: 'POST',
        url: url,
        data: data,
        success(res) {
            callback(null, res.data)
        },
        fail(e) {
            console.error("错误数据" + e)
            callback(e)
        }
    })
}



exports.getProductList = function (obj, callback) {
    let prodType = 'all';
    if (obj.prodType) {
        prodType = obj.prodType;
    }
    fetchGet(HOST + 'product/'+prodType+'/prodList?branch=1007&currentPage=1&limit=10', function (err, data) {
        if (err) {
            console.log(err)
            return;
        }
        callback(null, data);
    })
}



exports.getProductDetail = function (obj, callback) {
    console.log("查询保单详细");
    fetchGet(HOST + 'product/' + obj._id + '/prodDetail', function (err, data) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data);
        callback(null, data);
    })
}
