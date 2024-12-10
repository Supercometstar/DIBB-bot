const { 
	createBrowser, 
	createPage,
	passWarningPage,
	querySet,
	getPdfList,
	writeOrAppendToExcel
} = require('./lib')

const { pdfInfo, saveLocation, mainUrl, pdfUrl } = require('./utils/constants')

const start = async () => {
	console.log('Opening Browser!')
		const browser = await createBrowser()
		const pdfPage = await createPage(browser, pdfUrl)
		await passWarningPage(pdfPage)
		const page = await createPage(browser, mainUrl)
		await passWarningPage(page)
	console.log('Opened Browser! Query Setting...')
		await querySet(page)
	console.log('Got Results! Scraping PDFs....')
		await getPdfList(browser, page)
	console.log('Scraping Ended! Saving to Excel file....')
		await writeOrAppendToExcel(pdfInfo, saveLocation)
	console.log('Save Ended!')
		process.exit()
}

start()