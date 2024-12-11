const { 
	createBrowser, 
	createPage,
	passWarningPage,
	querySet,
	getPdfList,
	writeOrAppendToExcel
} = require('./lib')

const { values, pdfInfo, saveLocation, mainUrl, pdfUrl, logs } = require('./utils/constants')

module.exports = {
	start: async (searchValues, showOnly, lastDay) => {
		if (values.startFlag) return
		try{
			logs.push('Opening Browser!')
				values.startFlag = true
				const browser = await createBrowser()
				const pdfPage = await createPage(browser, pdfUrl)
				await passWarningPage(pdfPage)
				const page = await createPage(browser, mainUrl)
				await passWarningPage(page)
			logs.push('Opened Browser! Query Setting...')
				await querySet(page, searchValues, showOnly)
			logs.push('Got Results! Scraping PDFs....')
				await getPdfList(browser, page, lastDay)
			logs.push('Scraping Ended! Saving to Excel file....')
				await writeOrAppendToExcel(pdfInfo, saveLocation)
			logs.push('Save Ended!')
				await browser.close()
		}catch (e) {
			logs.push(`ERROR --->${e}`)
		}
		values.startFlag = false
	},
	getLog: () => {
		let extraLogs = logs.slice(values.readLogIdx)
		values.readLogIdx = logs.length
		return extraLogs
	}
}