const { delay } = require('../utils/functions')
const fs = require('fs')
const path = require('path')
const pdfExtract = require('./pdfExtract')

const { values, pdfInfo } = require('../utils/constants')

const checkDownloadComplete = async (type, pdfName) => {
	const pdfs = fs.readdirSync(path.join(__dirname, '../pdfs'))
	if (pdfs.includes(pdfName)) {
		let start = Date.now()
		const data = await pdfExtract(path.join(__dirname, '../pdfs', pdfName), pdfName, type)
		let end = Date.now()
		pdfInfo.push(data)
		values.pdfCount ++
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
	checkDownloadComplete(type, pdfName)
}

module.exports = processPdf