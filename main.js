const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } =  electron;

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

    const mainMenu = new Menu.buildFromTemplate(mainMenuTemplete);
    Menu.setApplicationMenu(mainMenu);
})

const mainMenuTemplete = [
    {
        label : "Dosya",
        submenu : [
            {
                label : "Yeni Todo Ekle"
            },
            {
                label : "Tümünü Sil"
            }

        ]
    }
]