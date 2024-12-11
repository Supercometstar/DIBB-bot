const DOM = (id='', tag='div') => {
	let dom;
	dom = document.getElementById(id)
	if (dom === null) {
		dom = document.createElement(tag)
		if (id !== '') dom.id = id
	}
	return dom
}

const sendData = (type, data) => {
	if (window.electron) {
		window.electron.sendToMain({ type, ...data })
	}else {
		
	}
}