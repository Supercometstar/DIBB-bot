const { 
	searchValues,
	showOnly
} = require('../utils/constants')

const querySet = async (page) => {

	await page.waitForSelector('#ctl00_cph1_ddlCategory')
	await page.select('#ctl00_cph1_ddlCategory', 'fsc')
	await page.type('#ctl00_cph1_txtValue', searchValues.join(',\n'))
	for (let item of showOnly) {
		await page.click(`#${item}`)
	}
	await page.click('#ctl00_cph1_butDbGo')
}

module.exports = querySet