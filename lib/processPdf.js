const { delay } = require('../utils/functions')
const fs = require('fs')
const path = require('path')
const pdfExtract = require('./pdfExtract')

const { values } = require('../utils/constants')

const checkDownloadComplete = async (type, pdfName) => {
	const pdfs = fs.readdirSync(path.join(__dirname, '../pdfs'))
	if (pdfs.includes(pdfName)) {
		let start = Date.now()
		await pdfExtract(path.join(__dirname, '../pdfs', pdfName), path.join(__dirname, '../output', 'result.xlsx'), pdfName, type)
		values.pdfCount ++
		let end = Date.now()
		console.log(`Processing ${values.pdfCount} PDF - ${pdfName} - ${end - start}`)
	}else {
		setTimeout(() => {
			checkDownloadComplete(type, pdfName)
		}, 500)
	}
}

const processPdf = async (link, type, href) => {
	const pdfName = href.split('/').pop()
	await link.click()
	setTimeout(() => {
		checkDownloadComplete(type, pdfName)
	}, 500)
}

module.exports = processPdf