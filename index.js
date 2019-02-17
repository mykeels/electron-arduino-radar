const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({ width: 600, height: 600 })

    if (process.env.DEV) win.webContents.openDevTools()

    // and load the index.html of the app.
    win.loadFile('./src/index.html')
}

app.on('ready', createWindow)