const app = getApp()

Page({
	data: {
		avatarUrl:'',
		city:'',
		country:'',
		gender:'',
		nickName:'',
		province:'',
		
	},
	onShow: function () {
		console.info('22')
		let self = this
		wx.getStorage({
			key: 'userinfo',
			success (res) {
				self.setData({
					avatarUrl:res.data.avatarUrl,
					city:res.data.city,
					country:res.data.country,
					gender:res.data.gender,
					nickName:res.data.nickName,
					province:res.data.province,
				})
			} 
		})
    },
	bindgetuserinfo(e) { 
		console.info(e)
	}
	
})