exports.delay = async (time) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time)
	})
}