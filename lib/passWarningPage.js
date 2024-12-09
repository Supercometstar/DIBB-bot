const passWarningPage = (page) => {
	const currentUrl = page.url();
	console.log(currentUrl)
	if (currentUrl) {
		await page.waitForSelector('input[type="submit"][name="butAgree"][value="OK"]')
		await page.click('input[type="submit"][name="butAgree"][value="OK"]');
	}
}

module.exports = passWarningPage