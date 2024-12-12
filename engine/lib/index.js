const createBrowser = require('./createBrowser')
const createPage = require('./createPage')
const passWarningPage = require('./passWarningPage')
const querySet = require('./querySet')
const getPdfList = require('./getPdfList')
const processPdf = require('./processPdf')
const searchOptionsToFile = require('./searchOptionsToFile')
const { writeOrAppendToExcel } = require('./pdfExtract/excelWriter.js')

module.exports = {
	createBrowser,
	createPage,
	passWarningPage,
	querySet,
	getPdfList,
	processPdf,
	searchOptionsToFile,
	writeOrAppendToExcel
}