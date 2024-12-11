const handleFilter = (item) => {
	if (item.target.checked) {
		showOnly.push(item.target.value)
	}else {
		let idx = showOnly.indexOf(item.target.value)
		showOnly.splice(idx, 1)
	}
}