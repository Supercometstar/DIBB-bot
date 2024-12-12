const handleUploadFile = () => {
	DOM('upload-file-input').click()

	DOM('upload-file-input').onchange = (event) => {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()

			reader.onload = (e) => {
				try {
					const jsonData = JSON.parse(e.target.result)
					searchValues = jsonData.searchValues
					showOnly = jsonData.showOnly
					lastDay = jsonData.lastDay
					setSearchValues()
					setFilter()
					setDay()
				}catch (a){
					console.log(a)
					addLog('This is not json file. Choose another file!')
				}
			}

			reader.readAsText(file)
		}
	}
}

const handleDownloadFile = () => {
	sendData('saveData', { searchValues, showOnly, lastDay })
}