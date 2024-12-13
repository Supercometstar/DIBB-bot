const puppeteer = require('puppeteer')

module.exports = async () => {
	const browser = await puppeteer.launch({
		executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
		headless: true,
		protocolTimeout: 1000000000,
		args: [
			'--disable-notifications',
			'--disable-popup-blocking',
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--ignore-certificate-errors'
		]
	})

	return browser
} 