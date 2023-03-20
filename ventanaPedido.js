var botonPedReg = document.getElementById('botonPedReg')

window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<td scope=\"row\">"+args['codigo']+"</td>"+ 
                                "<td scope=\"row\">"+args['nombre']+"</td>"+ 
                                "<td scope=\"row\">"+args['proveedor']+"</td>"+ 
                                "<td><input type=\"text\" id=\"cantidadPedido\"></input></td>"+
                            "</tr>"

})


// Boton regresar
botonPedReg.addEventListener("click", function(event, args){
    console.log('estoy regresando')
    window.close();
})