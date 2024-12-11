const { contextBridge, ipcRenderer } = require('electron');

// Expose methods to the renderer process
contextBridge.exposeInMainWorld('electron', {
  sendToMain: (message) => ipcRenderer.send('fromRenderer', message),
  onMessageFromMain: (callback) => ipcRenderer.on('fromMain', callback)
});
