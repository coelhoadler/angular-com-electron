const electron = require('electron')
,   { app, BrowserWindow } = electron
,   args = process.argv.slice(1);

let win, develop, platform = process.platform;

develop = args.some(val => val === "--develop");

console.log(`[Platform] 🖥  minha plataforma:  ${platform}.`); // darwin, win32 e linux

console.log(`[Version] ⚙️  Versão do Electron: ${process.versions.electron}.`);
console.log(`[Version] ⚙️  Versão do NodeJS: ${process.versions.node}.`);
console.log(`[Version] ⚙️  Versão do Chromium: ${process.versions.chrome}.`);

// Criando janela principal do App
function createMainElectronWindow() {
    let electronScreen = electron.screen
    ,   size = electronScreen.getPrimaryDisplay().workAreaSize;

    win = new BrowserWindow({
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        title: "Aplicação Angular dentro do Electron",
        fullscreen: true,
        show: false
    });

    win.loadURL(`file://${__dirname}/index.html`);
}

app.on('ready', createMainElectronWindow);

app.on('window-all-closed', () => {
    if (platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', _ => {
    if (win === null || platform === 'darwin') {
        createMainElectronWindow();
    }
});