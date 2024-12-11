const handleChangeDay = () => {
	lastDay = Number(DOM('day-select').value)
	if (lastDay === 0) {
		DOM('day-select').value = 1
		lastDay = 1
	}
	DOM("day-ago-label").innerHTML = `From ${lastDay} days ago`

}