const fs = require('fs')

module.exports = (data, location) => {
	fs.writeFileSync(location, JSON.stringify(data, null, 4), 'utf8')
}