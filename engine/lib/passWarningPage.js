const passWarningPage = async (page) => {
	const currentUrl = page.url();
	if (currentUrl.startsWith('https://www.dibbs.bsm.dla.mil/dodwarning.aspx') || currentUrl.startsWith('https://dibbs2.bsm.dla.mil')) {
		await page.waitForSelector('input[type="submit"][name="butAgree"][value="OK"]')
		await page.click('input[type="submit"][name="butAgree"][value="OK"]')
	}
}

module.exports = passWarningPage