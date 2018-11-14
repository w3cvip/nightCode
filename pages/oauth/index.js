const app = getApp();
Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
        
    },
    bindGetUserInfo: function (e) {
        if (e.detail.userInfo) {
            //用户按了允许授权按钮
            let userinfo = {
                avatarUrl:e.detail.userInfo.avatarUrl,
                city:e.detail.userInfo.city,
                country:e.detail.userInfo.country,
                gender:e.detail.userInfo.gender,
                nickName:e.detail.userInfo.nickName,
                province:e.detail.userInfo.province,
            }
            wx.setStorage({
                key:"userinfo",
                data:userinfo
            })
            //授权成功后，跳转进入小程序首页
            wx.switchTab({
                url: '/pages/tabar/index/index'  
            })
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                content:'您点击了拒绝授权，将无法进入小程序，重新授权之后才可以进入小程序',
                showCancel:false,
                confirmText:'继续授权',
                success:function(res){
                    if (res.confirm) {
                        console.log('继续授权')
                    } 
                }
            })
        }
    },
})