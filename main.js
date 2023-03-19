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

// VENTANA PRODUCTO INICIO
function createWindowDos(){
    ventanaProducto = new BrowserWindow ({
        width: 1400,
        height: 600,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventanaProducto.loadFile('ventanaProducto.html')
}
//Recibe y valida usuario
ipcMain.on('enviaUsuario',function(event,args){
    console.log(args)
    if(args == usuarioUno){
        usuarioValido = true
        console.log(usuarioValido)
    } else {
        usuarioValido = false
    }
})
//Recibe y valida password
ipcMain.on('enviaPass',function(event,args){
    console.log(args)
    if(args == passUno){
        passValido = true
        console.log(passValido)
    } else {
        passValido = false
    }

    //Envia Respuesta de autentication
    if(usuarioValido && passValido){
        console.log('credenciales correctas')
        createWindowDos()
        ventanaProducto.webContents.on('did-finish-load', function(){
            ventanaProducto.webContents.send('recibeMensaje','LISTADO DE PRODUCTOS')
        })
       
    } else {
        console.log('credenciales incorrectas')
        ventana.webContents.send('recibeMensaje','Credenciales Incorrectas')
    }
})

// VENTANA PRODUCTO EDITAR
function createWindowTres(){
    ventanaEditar = new BrowserWindow ({
        width: 1400,
        height: 400,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventanaEditar.loadFile('Editar.html')
}
// RECIBE NUMERO DE PROVEEDOR A EDITAR
ipcMain.on('enviaProveedor', function(event,args){
    console.log(args)

    // LLAMA VENTANA EDITAR Y PASA EL NUMERO DE FILA
    createWindowTres()
    ventanaEditar.webContents.on('did-finish-load', function(){
        ventanaEditar.webContents.send('recibeProveedor', args)
    })
})

app.whenReady().then(createWindow)