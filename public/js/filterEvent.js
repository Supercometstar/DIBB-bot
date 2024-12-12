const handleFilter = (item) => {
	if (item.target.checked) {
		showOnly.push(item.target.value)
	}else {
		let idx = showOnly.indexOf(item.target.value)
		showOnly.splice(idx, 1)
	}
}

const setFilter = () => {
	filterOptions.map((item, idx) => {
		if (showOnly.includes(item.value)) {
			DOM(item.value).checked = true
		}else {
			DOM(item.value).checked = false
		}
	})
}