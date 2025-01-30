const { app, BrowserWindow } = require('electron')

// Importa o Electron Reload para recarregar automaticamente
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

app.whenReady().then(() => {
    const MinhaJanela = new BrowserWindow({
        width: 1280,
        height: 720,
        webProperties: {
            nodeIntegration: true
        }
    })

    //Carregando a pagina HTML
    MinhaJanela.loadFile('index.html');

    //Carregando o Console
    MinhaJanela.webContents.openDevTools();
})