const filterOptionsRender = () => {
	filterOptions.map((item, idx) => {
		let dom = DOM('', 'label')
		dom.className = 'flex items-center space-x-3'

		let input = DOM('', 'input')
		input.id = item.value
		input.type = 'checkbox'
		input.className = 'h-5 w-5 min-w-5 min-h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
		input.onchange = handleFilter
		input.value = item.value

		let span = DOM('', 'span')
		span.className = 'text-gray-700'
		span.innerHTML = item.label

		let img = DOM('', 'img')
		img.src = item.img
		img.alt = item.label
		img.style.height = '20px'

		dom.append(input)
		dom.append(span)
		dom.append(img)

		DOM('filter-group').append(dom)	
	})
}

const handleScrap = () => {
	sendData('start', { searchValues, showOnly, lastDay })
}

const getLog = () => {
	sendData('getLog')
}

const saveExcel = () => {
	sendData('saveExcel')
}

const stop = () => {
	sendData('stop')
}

const handleLog = (event, data) => {
	data.map((item, idx) => {
		addLog(item)
	})
}

const init = () => {
	filterOptionsRender()
	window.electron.onMessageFromMain(handleLog)
	setInterval(getLog, 1000)
}