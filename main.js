const electron = require('electron');
const { app, BrowserWindow, net } = electron;
const args = process.argv.slice(1);

const fs = require("fs");

let win, develop;

develop = args.some(val => val === "--develop");

app.on('ready', () => {
    createElectronWindow();
});

let createElectronWindow = () => {
    let electronScreen = electron.screen;
    let size = electronScreen.getPrimaryDisplay().workAreaSize;

    // criando a janela do electron
    win = new BrowserWindow({
        x: 0,
        y: 0,
        width: size.width,
        height: size.height
    });

    let url = `file://${__dirname}/index.html`;
    console.log(url);
    win.loadURL(url);

    if (develop) {
        win.openDevTools();
    }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Emitted when the window is closed.
app.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});