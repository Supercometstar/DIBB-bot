const path = require('path')

exports.searchValues = [5305, 5306, 5310, 5320, 5315]
exports.showOnly = [
	'ctl00_cph1_chkSmallBusiness',
	'ctl00_cph1_chkServiceDisabledVeteranOwnedSmallBusiness',
	'ctl00_cph1_chkUnrestricted'
]

exports.downloadLocation = path.join(__dirname, '../pdfs')

exports.values = {
	pageNum: 1,
	pdfCount: 0
}