function throttleFunc(func, marginTime) {
	if (marginTime == undefined || marginTime == null) {
		marginTime = 1700
	}
	let lastTime = null
	return function () {
		let currentTime = + new Date()
		if (currentTime - lastTime > marginTime || !lastTime) {
			func.apply(this, arguments)
			lastTime = currentTime
		}
	}
}

// 弹窗提醒
function showToast(text, mask = true) {
	uni.showToast({
		title: text,
		icon: 'none',
		mask: mask,
		duration: 1800
	})
}
export default {
	throttleFunc,
	showToast
}