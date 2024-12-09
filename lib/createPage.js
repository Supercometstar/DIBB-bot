const createPage = async (browser, url) => {
	const page = await browser.newPage()

	await page.goto(url, {
		timeout: 0,
		waitUntil: 'load'
	})

	return page
}

module.exports = createPage