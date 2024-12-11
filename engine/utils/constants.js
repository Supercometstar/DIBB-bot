const path = require('path')

exports.mainUrl = 'https://www.dibbs.bsm.dla.mil/RFQ/'
exports.pdfUrl = 'https://dibbs2.bsm.dla.mil'

exports.downloadLocation = path.join(__dirname, '../pdfs')
exports.saveLocation = path.join(__dirname, '../output', 'result.xlsx')

exports.values = {
	pageNum: 1,
	pdfCount: 0,
	startFlag: false,
	readLogIdx: 0,
	totalPdfCount: 0,
	browser: undefined
}

exports.pdfInfo = []
exports.logs = []
