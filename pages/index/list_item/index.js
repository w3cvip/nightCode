const app = getApp()

Page({
	data: {
        isitem: 0,
	},
	
    indexList(e) {
		let id = e.target.id
		if (id === 'recommend') {
			this.setData({
				isitem: 0
			})
		} else {
			this.setData({
				isitem: 1
			})
		}
	},
})