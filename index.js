const { 
	createBrowser, 
	createPage,
	passWarningPage
} = require('./lib')

const start = async () => {
	const browser = await createBrowser()
	const page = await createPage(browser, 'https://www.dibbs.bsm.dla.mil/RFQ/')
	await passWarningPage(page)
}

start()