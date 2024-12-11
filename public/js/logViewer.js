const addLog = (log) => {
	let dom = DOM('', 'p')
	dom.className = 'text-gray-500'
	dom.innerHTML = log
	DOM('log-group').append(dom)
	DOM('log-group').scrollTo(0, 1000000)
}