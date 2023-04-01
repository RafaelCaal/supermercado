var botonPedReg = document.getElementById('botonPedReg')

window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<td scope=\"row\">"+args['idproducto']+"</td>"+ 
                                "<td scope=\"row\">"+args['nombreproducto']+"</td>"+ 
                                "<td scope=\"row\">"+args['idproveedor']+"</td>"+ 
                                "<td><input type=\"text\" id=\"cantidadPedido\"></input></td>"+
                            "</tr>"

})


// Boton regresar
botonPedReg.addEventListener("click", function(event, args){
    console.log('estoy regresando')
    window.close();
})