const app = getApp()

Page({
    data : {
        menuList: ['全部', '待付款', '待使用', '退款/售后'],
        itemIndex: 0,
        orderList: [
            { shopname: '皇家园林', status: 0, shopimg: '', time: '2018-11-06 19:00:00 - 2018-11-06 22:00:00', prize: '200.89', setmeal: '青岛啤酒1件+果盘一份', type: 0 },
            { shopname: '皇家园林', status: 1, shopimg: '', time: '2018-11-06 19:00:00 - 2018-11-06 22:00:00', prize: '200.89', setmeal: '青岛啤酒1件+果盘一份', type: 2 },
            { shopname: '皇家园林', status: 2, shopimg: '', time: '2018-11-06 19:00:00 - 2018-11-06 22:00:00', prize: '200.89', setmeal: '青岛啤酒1件+果盘一份', type: 1 },
            { shopname: '皇家园林', status: 3, shopimg: '', time: '2018-11-06 19:00:00 - 2018-11-06 22:00:00', prize: '200.89', setmeal: '青岛啤酒1件+果盘一份', type: 3 },
            {shopname:'皇家园林',status:3,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:3},
            {shopname:'皇家园林',status:2,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:2},
            {shopname:'皇家园林',status:1,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:1},
            {shopname:'皇家园林',status:0,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:3},
            {shopname:'皇家园林',status:2,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:2},
            {shopname:'皇家园林',status:3,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:1},
            {shopname:'皇家园林',status:1,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:0},
            {shopname:'皇家园林',status:0,shopimg:'',time:'2018-11-06 19:00:00 - 2018-11-06 22:00:00',prize:'200.89',setmeal:'青岛啤酒1件+果盘一份',type:0}
        ]
    },
    menuItem(e) { 
        let index = e.currentTarget.dataset.index
        this.setData({
            itemIndex:index
        })
    },
    onShow: function () {
    },
});