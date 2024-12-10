const { 
	createBrowser, 
	createPage,
	passWarningPage,
	querySet,
	getPdfList,
} = require('./lib')

const start = async () => {
	const browser = await createBrowser()
	const pdfPage = await createPage(browser, 'https://dibbs2.bsm.dla.mil')
	await passWarningPage(pdfPage)
	const page = await createPage(browser, 'https://www.dibbs.bsm.dla.mil/RFQ/')
	await passWarningPage(page)
	await querySet(page)
	const pdfInfoList = await getPdfList(browser, page)
	console.log('Successfully Complete')
	process.exit()
}

start()