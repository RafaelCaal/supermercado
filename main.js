const {app, dialog, BrowserWindow, ipcMain} = require('electron')

const path = require('path')

let ventana;
let ventanaProducto;
let ventanaPedido;
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
    //ventana.openDevTools()
}

// INICIO ventana lista productos
function createWindowDos(){
    ventanaProducto = new BrowserWindow ({
        width: 1400,
        height: 700,
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
// FIN ventana lista productos

// INICIO ventana editar
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
/*
recibe el valor del indice del arreglo contenido en e JSON 
args[0] tambien recibe el nombre de la ventana args[1] 
que se solicita y ambos estan contenidos dentro de args
*/
ipcMain.on('enviaProveedor', function(event,args){
    console.log(args[1])

    //el usuario presiona el boton editar => abrimos ventana ediar
    if(args[1] == "editar"){
        console.log('solitan ventana editar')
        createWindowTres()
        ventanaEditar.webContents.on('did-finish-load', function(){
            ventanaEditar.webContents.send('recibeProveedor', args[0])
        })
    }
    //el usuario presiona el boton pedido => abrimos ventana pedido
    if(args[1] == "pedido"){
        console.log('solitan ventana pedido')
        createWindowCuatro()
        ventanaPedido.webContents.on('did-finish-load', function(){
            ventanaPedido.webContents.send('recibeProveedor', args[0])
        })
    }
    // llama a ventana editar y pasa el numero de fila( indice del arreglo)
    
})
// FIN ventana editar

// INICIO ventana realizar pedido
function createWindowCuatro(){
    ventanaPedido = new BrowserWindow ({
        width: 800,
        height: 350,
        webPreferences:{
            preload: path.join(app.getAppPath(),'preload.js')
        }
    });
    ventanaPedido.loadFile('ventanaPedido.html')
}
// FIN ventana realizar pedido

app.whenReady().then(createWindow)