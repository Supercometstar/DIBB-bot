const handleChangeDay = () => {

	lastDay = Number(DOM('day-select').value)
	if (lastDay === 0) {
		DOM('day-select').value = 1
		lastDay = 1
	}
	DOM("day-ago-label").innerHTML = `From ${lastDay} days ago`

}

const setDay = () => {

	if (lastDay > 7) lastDay = 7
	else if (lastDay < 1) lastDay = 1

	DOM('day-select').value = lastDay
	DOM("day-ago-label").innerHTML = `From ${lastDay} days ago`
	
}