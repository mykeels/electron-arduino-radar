const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname);

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({ width: 800, height: 600 })

    // and load the index.html of the app.
    win.loadFile('./src/index.html')
}

app.on('ready', createWindow)