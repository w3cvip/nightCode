const app = getApp()

Page({
	data: {
		imgUrls: [
			'https://www.lgstatic.com/i/image2/M01/9F/E6/CgotOVvQLKaASrSLAAQQyIYp5f0968.JPG',
			'https://www.lgstatic.com/i/image2/M01/A2/0C/CgotOVvWhUuAe5nyAAUEDYguK5A688.JPG',
			'https://www.lgstatic.com/i/image2/M01/9F/E6/CgotOVvQLKaASrSLAAQQyIYp5f0968.JPG'
		],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		isitem: 0,
		items:20
	},
	search() { 
		console.info('333')
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
	}

})