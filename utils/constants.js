const path = require('path')

exports.lastDay = 7
exports.searchValues = [5305, 5306, 5310, 5320, 5315]
exports.showOnly = [
	// 'ctl00_cph1_ckhAidc',  																				// Automated Indefinite Delivery Contract
	// 'ctl00_cph1_chkBidSet', 																			// Items with Technical Documents
	// 'ctl00_cph1_chkFastPace', 																		// Fast Award Candidates
	'ctl00_cph1_chkSmallBusiness', 																	// Small Business Set-Asides
	// 'ctl00_cph1_chkHubZone', 																		// HUBZone Set-Asides
	'ctl00_cph1_chkServiceDisabledVeteranOwnedSmallBusiness', 			// Service Disabled Veteran Owned Small Business Set-Asides
	// 'ctl00_cph1_chkWosb', 																				// Woman Owned Small Business Set-Asides
	// 'ctl00_cph1_chkEdwosb', 																			// Economically Disadvantaged Women Owned Small Business Set-Asides
	'ctl00_cph1_chkUnrestricted' 																		// Unrestricted/Not Set-Asides
]

exports.mainUrl = 'https://www.dibbs.bsm.dla.mil/RFQ/'
exports.pdfUrl = 'https://dibbs2.bsm.dla.mil'

exports.downloadLocation = path.join(__dirname, '../pdfs')
exports.saveLocation = path.join(__dirname, '../output', 'result.xlsx')

exports.values = {
	pageNum: 1,
	pdfCount: 0
}

exports.pdfInfo = []
