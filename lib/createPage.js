const { downloadLocation } = require('../utils/constants')

const createPage = async (browser, url, isDownload=false) => {
	const page = await browser.newPage()
	await page._client().send('Page.setDownloadBehavior', {
	    behavior: 'allow',
	    downloadPath: downloadLocation,
  	})
	await page.goto(url, {
		waitUntil: 'networkidle2'
	})

	return page
}

module.exports = createPage