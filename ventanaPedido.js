window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<td scope=\"row\">"+args['codigo']+"</td>"+ 
                                "<td scope=\"row\">"+args['nombre']+"</td>"+ 
                                "<td scope=\"row\">"+args['proveedor']+"</td>"+ 
                                "<td><input type=\"text\"></input></td>"+
                            "</tr>"

})