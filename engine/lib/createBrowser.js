const puppeteer = require('puppeteer')
const path = require('path')

module.exports = async () => {
	const browser = await puppeteer.launch({
		headless: false,
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