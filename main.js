const { app, BrowserWindow } = require('.')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('main/index.html')
  }

app.whenReady().then(() => {
    createWindow()
  })