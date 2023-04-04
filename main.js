/**
 * El usuario de ingreso es: tds (minusculas)
 * El password de ingreso es: abc (minusculas)
 */

const {app, dialog, BrowserWindow, ipcMain} = require('electron')

const path = require('path')
const mysql = require('mysql2')

const bcrypt = require('bcrypt')
const saltrounds = 10;

let ventana;
let ventanaProducto;
let ventanaPedido;
usuarioValido = false
passValido = false
usuarioUno = "tds"
passUno = "abc" 

//creamos la conexion a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'conexion_pruebas',
    password: 'password',
    database: 'supermercadouno'
})

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
ipcMain.on('enviaCredenciales',function(event,args){
    console.log(args)
    conexion.promise().execute('SELECT * FROM usuario WHERE nomusuario=?' , [args[0]])
    .then(([results, fields])=>{
        if(results.length > 0){
            console.log('bienvenido')
            console.log(results)
            bcrypt.compare(args[1], results[0][2], function(err, result) {
                createWindowDos()
                ventanaProducto.webContents.on('did-finish-load', function(){
                    var pruebaX = 'hola'
                    //cargamos los datos de la tabla productos
                    conexion.query('SELECT * FROM productos',
                        function(err, resultProd, fields){
                            if(err){
                                console.log(err)
                            }else{
                                console.log(resultProd)
                                //console.log(fields)

                                //query para obtener el listado de proveedor y su ID
                                conexion.query(
                                    'SELECT  p.idproveedor, p.nombreproveedor FROM proveedor AS p INNER JOIN productos AS pr ON p.idproveedor = pr.idproveedor;',
                                    function(err, resultProv, fields){
                                        if(err){
                                            console.log(err)
                                        }else{
                                            ventanaProducto.webContents.send('recibeMensaje',[resultProd, resultProv])
                                            ventana.close();
                                        }
                                    })
                            }
                    })                  
                })
            })
        }else{
            console.log('credenciales incorrectas')
            ventana.webContents.send('recibeMensaje','Credenciales Incorrectas')
        }
    })
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
    console.log(args)
    console.log(args[0])
    console.log(args[1])
    //el usuario presiona el boton editar => abrimos ventana ediar
    //recibe arreglo[arregloProductos, arregloProveedor, editar/ordenar] 
    if(args[2] == "editar"){
        console.log('solicitan ventana editar')
        createWindowTres()
        ventanaEditar.webContents.on('did-finish-load', function(){
            ventanaEditar.webContents.send('recibeProveedor', args)
        })
    }
    //el usuario presiona el boton pedido => abrimos ventana pedido
    if(args[2] == "pedido"){
        console.log('solitan ventana pedido')
        createWindowCuatro()
        ventanaPedido.webContents.on('did-finish-load', function(){
            ventanaPedido.webContents.send('recibeProveedor', args)
        })
    }    
})

//se reciben los cambios de la ventana editar y se actualiza tabla
ipcMain.on('vent_edit_envia', function(event, args){
    console.log(args)
    //Actualizamos datos de a tabla PRODUCTOS
    conexion.promise().execute('UPDATE productos SET nombreproducto=? WHERE idproducto=?',[args[0].nombreproducto,args[0].idproducto])
    conexion.promise().execute('UPDATE productos SET descripcionproducto=? WHERE idproducto=?',[args[0].descripcionproducto,args[0].idproducto])
    conexion.promise().execute('UPDATE productos SET precioproducto=? WHERE idproducto=?',[args[0].precioproducto,args[0].idproducto])
    conexion.promise().execute('UPDATE productos SET categoria=? WHERE idproducto=?',[args[0].categoria,args[0].idproducto])
    conexion.promise().execute('UPDATE productos SET existencia=? WHERE idproducto=?',[args[0].existencia,args[0].idproducto])
    //Actualizamos datos de a tabla PROVEEDOR
    conexion.promise().execute('UPDATE proveedor SET nombreproveedor=? WHERE idproveedor=?',[args[0].nombreproveedor,args[0].idproveedor])
   
    //Refrescamos haciendo un nuevo llamado a la BD
    conexion.query('SELECT * FROM productos',function(err, resultProd, fields){
    //query para obtener el listado de proveedor y su ID
    conexion.query('SELECT  p.idproveedor, p.nombreproveedor FROM proveedor AS p INNER JOIN productos AS pr ON p.idproveedor = pr.idproveedor;', function(err, resultProv, fields){
        ventanaProducto.reload();
        })
    }) 
    //fin refrescar
    
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
// recibe el pedido desde la interface
ipcMain.on('realiza_pedido',function(event,args){
    console.log(args)
    var pedProdID = args.pedIdProd
    var pedNomProd = args.pedNomProd
    var pedIdProv = args.pedIdProv
    var pedNomProv = args.pedNomProv
    var pedCantidad = args.pedCantidad
    console.log(pedProdID, ' ', pedNomProd, ' ', pedIdProv, ' ', pedNomProv, ' ', pedCantidad)
    
    conexion.promise().execute('INSERT INTO pedido(idproducto, nombreProducto, idProveedor, nombreProveedor, cantidad, usuario) VALUES(?,?,?,?,?, CURRENT_USER) ', [pedProdID, pedNomProd, pedIdProv, pedNomProv, pedCantidad])
})

// FIN ventana realizar pedido

app.whenReady().then(createWindow)


/**
 * Pruebas
 */
//query para obtener el listado de proveedor y su ID
conexion.query(
    'SELECT  p.idproveedor, p.nombreproveedor FROM proveedor AS p INNER JOIN productos AS pr ON p.idproveedor = pr.idproveedor;',
    function(err, result, fields){
        if(err){
            console.log(err)
        }
        console.log(result)
        //console.log(fields)
    }
)
//primer query de prueba
conexion.query(
    'SELECT * FROM usuario',
    function(err, result, fields){
        if(err){
            console.log(err)
        }
        console.log(result)
        //console.log(fields)
    }
)




