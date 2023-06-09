
var tablaProveedores = document.getElementById('tablaProveedores')
var encabezado = document.getElementById('encabezadoProductos')
var editar = document.getElementById('editarProducto')
var pedido = document.getElementById('realizarPedido')
var salir = document.getElementById('salirProducto')

 window.comunicacion.recibeMensaje(function(event,args){
    //encabezado.innerHTML = args
    console.log(args[0])
    console.log(args[1])
    for (var i=0; i<args[0].length; i++){
        var controlProd = args[0][i];
        var controlProv = args[1][i];
        tablaProveedores.innerHTML += "<tr>"+
                                        "<td><input type=\"radio\" name=\"fila\" value=\""+controlProd['idproducto']+"\"></td>"+
                                        "<td>"+controlProd['idproducto']+"</td>"+ 
                                        "<td>"+controlProd['nombreproducto']+"</td>"+
                                        "<td>"+controlProd['descripcionproducto']+"</td>"+    
                                        "<td>"+controlProd['precioproducto']+"</td>"+
                                        "<td>"+controlProd['categoria']+"</td>"+
                                        "<td>"+controlProv['nombreproveedor']+"</td>"+
                                        "<td>"+controlProd['existencia']+"</td>"+
                                      "</tr>"
                                      console.log(i)
                                      console.log("tamano del arreglo en indice 0 es: " + args[0].length)
    }

    //capturamos el indice del arreglo proveedores y llamamos ventana para editar producto
    editar.addEventListener('click', function(){
        var filaSeleccionada = document.querySelector('input[name="fila"]:checked'); 
        console.log(filaSeleccionada.value)   
        window.comunicacion.enviaProveedor([args[0][filaSeleccionada.value-1], args[1][filaSeleccionada.value-1], 'editar'])
    })  

    //capturamos el indice del arreglo proveedores y llamamos ventana para realizar pedido
    pedido.addEventListener('click', function(){
        var filaSeleccionada = document.querySelector('input[name="fila"]:checked'); 
            console.log(filaSeleccionada.value)   
            window.comunicacion.enviaProveedor([args[0][filaSeleccionada.value-1], args[1][filaSeleccionada.value-1], 'pedido'])
    })
    
})



// Boton salir
salir.addEventListener("click", function(event, args){
    console.log('estoy regresando')
    window.close();
})


/*
//datos de prueba en formato JSON entregable 2
var productos = [
    {
        "codigo": "10001",
        "nombre": "Colgate Clasica",
        "descripcion": "Pasta Dental 10g",
        "precio": "15.80",
        "categoria": "Cuidado Personal",
        "proveedor": "Palmolive Centro America",
        "existencia": 300
    },
    {
        "codigo": "10002",
        "nombre": "Soda Sprite",
        "descripcion": "Lata 12oz",
        "precio": "7.50",
        "categoria": "Bebidas Carbonatadas",
        "proveedor": "Pepsi Guatemala",
        "existencia": 500
    },
    {
        "codigo": "10003",
        "nombre": "Arroz Blanco",
        "descripcion": "Gallo Dorado 1 lb",
        "precio": "4.10",
        "categoria": "Alimentos",
        "proveedor": "Gallo Dorado S,A.",
        "existencia": 200
    },
    {
        "codigo": "10004",
        "nombre": "Aceite Ideal",
        "descripcion": "Aceite de Girasol 20 oz",
        "precio": "12.00",
        "categoria": "Alimentos",
        "proveedor": "Ideal Centro America",
        "existencia": 100
    },
    {
        "codigo":  "10005",
        "nombre": "Coca Cola Sin Azucar",
        "descripcion": "Lata 12 oz",
        "precio": "6.50",
        "categoria": "Bebidas Carbonatadas",
        "proveedor": "FEMSA",
        "existencia": 260
    },
    {
        "codigo": "10006",
        "nombre": "Queso Crema",
        "descripcion": "Dos pinos 10 oz",
        "precio": "14.00",
        "categoria": "Alimentos Lacteos",
        "proveedor": "Dos Pinos Costa Rica",
        "existencia": 200
    },
    {
        "codigo": "10007",
        "nombre": "Choco Crispies",
        "descripcion": "Cereal de Maiz Inflado 300 gm",
        "precio": "23.40",
        "categoria": "Cereales",
        "proveedor": "Kellog's Centro America",
        "existencia": 140
    },
    {
        "codigo": "10008",
        "nombre": "Incaparina Preparada",
        "descripcion": "Incaparina 1L Preparada",
        "precio": "8.70",
        "categoria": "Bebidas Naturales",
        "proveedor": "Castillo Centro America",
        "existencia": 400
    },
    {
        "codigo": "10009",
        "nombre": "Bimbo Integral",
        "descripcion": "Pan integral 300 gm",
        "precio": "23.50",
        "categoria": "Alimentos Integrales",
        "proveedor": "Bimbo Centro America",
        "existencia": 200
    },
    {
        "codigo": "10010",
        "nombre": "Listerine",
        "descripcion": "Enjuage bucal 40 oz",
        "precio": "38.20",
        "categoria": "Cuidado Personal",
        "proveedor": "Palmolive Centro America",
        "existencia": 80
    },
]
*/