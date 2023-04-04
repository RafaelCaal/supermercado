var botonPedReg = document.getElementById('botonPedReg')
var botonOrdenar = document.getElementById('botonOrdenar')
var mensajePedido = document.getElementById('mensajePedido')

window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<td scope=\"row\" id=\"pedido_idproducto\" >"+args[0]['idproducto']+"</td>"+ 
                                "<td scope=\"row\" id=\"pedido_nombreproducto\">"+args[0]['nombreproducto']+"</td>"+
                                "<td scope=\"row\" id=\"pedido_idproveedor\">"+args[1]['idproveedor']+"</td>"+ 
                                "<td scope=\"row\" id=\"pedido_nombreproveedor\">"+args[1]['nombreproveedor']+"</td>"+ 
                                "<td><input type=\"text\" id=\"pedido_cantidad\" required></input></td>"+
                            "</tr>"

    botonOrdenar.addEventListener('click', function(){
        console.log(args)
        var pedido = {
            pedIdProd : args[0].idproducto,
            pedNomProd : args[0].nombreproducto,
            pedIdProv : args[1].idproveedor,
            pedNomProv : args[1].nombreproveedor,
            pedCantidad : pedido_cantidad.value
        }
        //enviamos el pedido a traves de un JSON hacia el servidor 
        window.comunicacion.realiza_pedido(pedido)
        //informamos al usuario que se ha realizado la orden 
        mensajePedido.innerHTML = "Pedido realizado con exito!"
        setTimeout(() => {
            mensajePedido.innerHTML  = "  "
        }, "2000");

        console.log(pedido)
    })


})

// Boton regresar
botonPedReg.addEventListener("click", function(event, args){
    console.log('estoy regresando')
    window.close();
})