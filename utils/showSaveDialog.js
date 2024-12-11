const { dialog } = require('electron')
const path = require('path')

module.exports = async (win) => {
  const saveLocation = await dialog.showSaveDialog(win, {
    title: 'Save Result Data',
    defaultPath: 'result.xlsx', // Default file name
    filters: [
      { name: 'Excel Files', extensions: ['xlsx'] },
    ],
  })

  if (!saveLocation.canceled) {
    return saveLocation.filePath
  }
  return path.join(__dirname, '../output', 'result.xlsx')
}