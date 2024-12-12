const { dialog } = require('electron')
const path = require('path')

module.exports = async (win, type='result') => {
  let title = 'Save Result Data'
  let defaultPath = 'result.xlsx'
  let filters = [
    { name: 'Excel Files', extensions: ['xlsx'] },
  ]

  switch(type) {
    case 'searchOption': 
      title = 'Save Search Options'
      defaultPath = 'My-search-options.json'
      filters = [
        { name: 'JSON Object Files', extensions: ['json'] },
      ]
      break
  }

  const saveLocation = await dialog.showSaveDialog(win, {
    title, defaultPath, filters
  })

  if (!saveLocation.canceled) {
    return saveLocation.filePath
  }
  return path.join(__dirname, '../output', defaultPath)
}