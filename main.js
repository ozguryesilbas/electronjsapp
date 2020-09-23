const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } =  electron;

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({}); //windowla ilgili birçok özelliği contructorda tanımlayabiliriz
    mainWindow.loadURL(
        url.format({
            pathname : path.join(__dirname, "main.html"),
            protocol : "file:",
            slashes : true //tüm işletim sistemleri için true verilir
        })
    );

    //alert(); alert metodu nodejs'de çalışmaz, çünkü backend tarafındayız
    console.log("ElectronJs App...");
})