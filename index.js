const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const engine = require('./engine')

var win

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, './public/assets/img', 'favicon.png'),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './public/js/preload.js')
    },
    autoHideMenuBar: true
  })

  win.loadFile('./public/index.html')
}

ipcMain.on('fromRenderer', (event, message) => {
  switch (message.type) {
    case 'start': engine.start(win, message.searchValues, message.showOnly, message.lastDay)
      break
    case 'getLog': let extraLogs = engine.getLog()
      event.reply('fromMain', extraLogs)
      break
    case 'saveExcel': engine.saveExcel(win)
      break
    case 'stop': engine.stop()
      break
  }
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
