const processPdf = require('./processPdf')
const { delay } = require('../utils/functions')
const passWarningPage = require('./passWarningPage')

const { values } = require('../utils/constants')

const getPdfList = async (browser, page) => {

	for (let i=0; i<2; i++) {
		await page.waitForNavigation()
		let sortBtn = await page.waitForSelector('xpath///a[contains(text(), "Issued")]', { timeout: 10000 })
		await sortBtn.click()
		console.log('sort')
	}

	while (true) {
		console.log(`Processing ${values.pageNum} Page`)
		await page.waitForNavigation()
		await page.waitForSelector('#ctl00_cph1_grdRfqSearch tr.BgWhite', { timeout: 0 })
		const pdfList = await page.$$('#ctl00_cph1_grdRfqSearch tr.BgWhite, #ctl00_cph1_grdRfqSearch tr.BgSilver')
		
		for (let pdf of pdfList) {
			let link = await pdf.$('td:nth-child(5) a[target="DIBBSDocuments"]')
			let href = await pdf.$eval('td:nth-child(5) a[target="DIBBSDocuments"]', a => a.href)
			let type = await pdf.$eval('td:nth-child(5) > span > img', img => img.alt)
			let issuedDate = await pdf.$eval('td:nth-child(8) > span', span => span.innerHTML)
			if ((Date.now() - new Date(issuedDate))/1000/3600/24 > 7) return
			await processPdf(link, type, href)
		}

		values.pageNum ++
		if ((values.pageNum-1)%10 === 0) {
			try {
				const pagination = await page.$$('table tbody tr td ')
				pagination.reverse()
				await pagination[1].click()
			}catch {
				return
			}
		}else {
			try {
				let next = await page.$(`xpath///table/tbody/tr/td/a[text()="${values.pageNum}"]`)
				await next.click()
			}catch {
				return
			}
		}
	}
}

module.exports = getPdfList