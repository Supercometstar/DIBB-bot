const { 
	createBrowser, 
	createPage,
	passWarningPage,
	querySet,
	getPdfList,
	searchOptionsToFile,
	writeOrAppendToExcel
} = require('./lib')

const { values, pdfInfo, mainUrl, pdfUrl, logs } = require('./utils/constants')

const showSaveDialog = require('../utils/showSaveDialog')

const completeListener = async (browser, win) => {
	if (values.pdfCount === values.totalPdfCount) {
		try{
			logs.push('Scraping Ended! Saving to Excel file....')
				await browser.close()
				const saveLocation = await showSaveDialog(win)
				await writeOrAppendToExcel(pdfInfo, saveLocation)
			logs.push(`Saved in ${saveLocation}!`)
			logs.push('Done!')
		}catch (e) {
			logs.push(`Something went wrong. Try again!\n ERROR ---> ${e}`)
		}
	}else {
		setTimeout(() => {
			completeListener(browser, win)
		}, 1000)
	}
}

const init = () => {
	values.pageNum = 1
	values.pdfCount = 0
	values.totalPdfCount = 0
	let pdfInfoLength = pdfInfo.length
	for (let i=0; i<pdfInfoLength; i++) {
		pdfInfo.pop()
	}
}

module.exports = {
	start: async (win, searchValues, showOnly, lastDay) => {
		if (values.startFlag) return
		try{
			logs.push('Opening Browser!')
				values.startFlag = true
				init()
				values.browser = await createBrowser()
				const pdfPage = await createPage(values.browser, pdfUrl)
				await passWarningPage(pdfPage)
				const page = await createPage(values.browser, mainUrl)
				await passWarningPage(page)
			logs.push('Opened Browser! Query Setting...')
				await querySet(page, searchValues, showOnly)
			logs.push('Got Results! Scraping PDFs....')
				await getPdfList(values.browser, page, lastDay)
				setTimeout(() => {
					completeListener(values.browser, win)
				}, 1000)
		}catch (e) {
			logs.push(`Something went wrong. Try again!\n ERROR ---> ${e}`)
		}
		values.startFlag = false
	},
	getLog: () => {
		let extraLogs = logs.slice(values.readLogIdx)
		values.readLogIdx = logs.length
		return extraLogs
	},
	saveExcel: async (win) => {
		if (pdfInfo.length === 0) {
			logs.push('There is no data now. wait...')
			return
		}
		const saveLocation = await showSaveDialog(win)
		await writeOrAppendToExcel(pdfInfo, saveLocation)
		logs.push(`Saved in ${saveLocation}!`)
	},
	stop: async () => {
		values.browser.close()
		values.startFlag = false
		logs.push('Stopped Scraping!')
	},
	saveSearchOptions: async (win, data) => {
		try{
			if (data.searchValues.length === 0 && data.showOnly.length === 0) {
				logs.push('Before download, input search options!')
				return
			}
			const saveLocation = await showSaveDialog(win, 'searchOption')
			searchOptionsToFile(data, saveLocation)
			logs.push(`Searech options saved in ${saveLocation}!`)
		}catch (e) {
			logs.push(`Something went wrong. Try choose other path!\n ERROR ---> ${e}`)
		}
	}
}