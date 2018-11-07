//获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	getuser(){
		wx.getSetting({
			success: (response) => {
			  	console.log(response)
			  	if (!response.authSetting['scope.userInfo']) {
					wx.authorize({
						scope: 'scope.userInfo',
						success: () => {
							console.log('yes')
						}
					})
				}
			}
		})	  
	}
})