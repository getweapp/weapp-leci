//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        loadingHidden:false,
        loadmoreHidden:false,
        list: [],
        swiper: {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 300
        }
    },
    onLoad: function() {
        var that = this;
        wx.request({
            url: "https://api.getweapp.com/thirdparty/leci/tuijian",
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                setTimeout(function() {
                    that.setData({
                        list: res.data,
                        loadingHidden: true
                    });
                }, 600);
            }
        })
    },
    actionTolower: function() {
        var that = this;
        this.setData({
          loadmoreHidden: false
        });
        wx.request({
            url: "https://api.getweapp.com/thirdparty/leci/loadmore",
            success: function(res) {
                that.data.loadingHidden=false;
                setTimeout(function() {
                    that.setData({
                        list: that.data.list.concat(res.data),
                        loadingHidden: true,
                        loadmoreHidden:true
                    })
                }, 1000);
            }
        })
    },
    levideo:function () {
        wx.navigateTo({
            url: "../levideo/levideo"
        })
    }









})
