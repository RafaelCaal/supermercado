const {app, dialog, BrowserWindow, ipcMain} = require('electron')

const path = require('path')

let ventana;
let ventanaProducto;
usuarioValido = false
passValido = false
usuarioUno = "super"
passUno = "abc" 

function createWindow(){
    ventana = new BrowserWindow ({
        width: 300,
        height: 400,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventana.loadFile('index.html')
    ventana.openDevTools()
}

function createWindowDos(){
    ventanaProducto = new BrowserWindow ({
        width: 1000,
        height: 600,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventanaProducto.loadFile('ventanaProducto.html')
}


ipcMain.on('enviaUsuario',function(event,args){
    console.log(args)
    if(args == usuarioUno){
        usuarioValido = true
        console.log(usuarioValido)
    } else {
        usuarioValido = false
    }
})
ipcMain.on('enviaPass',function(event,args){
    console.log(args)
    if(args == passUno){
        passValido = true
        console.log(passValido)
    } else {
        passValido = false
    }

    //autenticacion de usuario y password
    if(usuarioValido && passValido){
        console.log('credenciales correctas')
        createWindowDos()
        ventanaProducto.webContents.on('did-finish-load', function(){
            ventanaProducto.webContents.send('recibeMensaje','LISTA DE PRODUCTOS')
        })
       
    } else {
        console.log('credenciales incorrectas')
        ventana.webContents.send('recibeMensaje','Credenciales Incorrectas')
    }
})


app.whenReady().then(createWindow)