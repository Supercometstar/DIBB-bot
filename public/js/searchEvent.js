const handleSearch = () => {

	DOM('searched-list').innerHTML = ''
	
	if (DOM('search-input').value !== '') {
		codeOptions.filter((item) => item.label.includes(DOM('search-input').value) || item.value.includes(DOM('search-input').value))
					.map((item, idx) => {
						let dom = DOM('', 'li')
						dom.tabindex = idx
						if (idx === 0) dom.className = 'px-4 py-2 bg-gray-100 hover:bg-gray-100 cursor-pointer'
						else dom.className = 'px-4 py-2 hover:bg-gray-100 cursor-pointer'
						dom.innerHTML = `${item.value} - ${item.label}`
						dom.value = item.value
						dom.onclick = addSearchValue
						DOM('searched-list').append(dom)
					})
	}

}

const searchedCount = () => {

	if (DOM('search-input').value !== '') return codeOptions.filter((item) => item.label.includes(DOM('search-input').value) || item.value.includes(DOM('search-input').value)).length
	else return 0

}

const addSearchValue = (item) => {
	
	if (searchValues.includes(item.target.value)) return
	searchValues.push(item.target.value)

	DOM('search-input').value = ''
	DOM('searched-list').innerHTML = ''

	let dom = DOM('', 'div')
	dom.className = 'flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg shadow-sm m-1'
	dom.value = item.target.value
	
	let span = DOM('', 'span')
	span.className = 'text-gray-900 font-medium'
	span.innerHTML = item.target.innerHTML
	
	let button = DOM('', 'button')
	button.className = 'text-gray-500 text-lg hover:text-gray-700'
	button.onclick = removeSearchValue
	button.innerHTML = 'x'

	dom.append(span)
	dom.append(button)

	if (searchValues.length === 1) DOM('selected-group').innerHTML = ''
	DOM('selected-group').append(dom)

}

const removeSearchValue = (item) => {

	let idx = searchValues.indexOf(item.target.parentElement.value)
	searchValues.splice(idx, 1)
	item.target.parentElement.remove()

	if (DOM('selected-group').innerHTML === '') DOM('selected-group').innerHTML = 'No selected'

}

const handleSearchKeyEvent = (e) => {
	if (e.key === 'ArrowUp') {
		dropdownFocus --
		if (dropdownFocus < 0) dropdownFocus = searchedCount() - 1
	}else if (e.key === 'ArrowDown') {
		dropdownFocus ++
		if (dropdownFocus >= searchedCount()) dropdownFocus = 0
	}else if (e.key === 'Enter') {
		Array.from(DOM('searched-list').children).map((item, idx) => {
			if (idx === dropdownFocus) addSearchValue({ target: item })
		})
		dropdownFocus = 0
	}
	Array.from(DOM('searched-list').children).map((item, idx) => {
		if (idx === dropdownFocus) {
			item.className = 'px-4 py-2 bg-gray-100 hover:bg-gray-100 cursor-pointer'
			item.scrollIntoView({
      			block: 'center',
      			inline: 'nearest'
      		})
      		document.documentElement.scrollTo(0, 0)
		}
		else item.className = 'px-4 py-2 hover:bg-gray-100 cursor-pointer'
	})
}