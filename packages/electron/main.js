const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 780,
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'icon.png'
  });

  mainWindow.loadFile('public/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  mainWindow.webContents.on('did-fail-load', _ => {
    mainWindow.loadFile('public/index.html');
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});
