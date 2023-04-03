var botonPedReg = document.getElementById('botonPedReg')
var botonOrdenar = document.getElementById('botonOrdenar')

window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<td scope=\"row\" id=\"pedido_idproducto\" >"+args[0]['idproducto']+"</td>"+ 
                                //"<td scope=\"row\" id=\"pedido_idproducto\" value=\""+args[0]['idproducto']+"\"></td>"+ 

                                "<td scope=\"row\" id=\"pedido_nombreproducto\">"+args[0]['nombreproducto']+"</td>"+
                                "<td scope=\"row\" id=\"pedido_idproveedor\">"+args[1]['idproveedor']+"</td>"+ 
                                "<td scope=\"row\" id=\"pedido_nombreproveedor\">"+args[1]['nombreproveedor']+"</td>"+ 
                                "<td><input type=\"text\" id=\"pedido_cantidad\" required></input></td>"+
                            "</tr>"
                            //"<td><input type=\"text\" id=\"tempNom\" value=\""+args[0]['nombreproducto']+"\"></input></td>"+


    botonOrdenar.addEventListener('click', function(){
        console.log(args)
        var pedido = {
            pedIdProd : pedido_idproducto.value,
            pedNomProd : pedido_nombreproducto.value,
            pedIdProv : pedido_idproveedor.value,
            pedNomProv : pedido_nombreproveedor.value,
            pedCantidad : pedido_cantidad.value
        }

        window.comunicacion.realiza_pedido(pedido)

        console.log(pedido)
    })


})

// Boton regresar
botonPedReg.addEventListener("click", function(event, args){
    console.log('estoy regresando')
    window.close();
})