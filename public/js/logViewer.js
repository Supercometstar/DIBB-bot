const addLog = (log) => {
	let dom = DOM('', 'p')
	dom.className = 'text-gray-500'
	dom.innerHTML = log
	DOM('log-group').append(dom)
}