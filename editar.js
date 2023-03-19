var tablaEditar = document.getElementById('tablaEditar')

window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<th scope=\"row\">"+args['codigo']+"</th>"+ 
                                "<td>"+args['nombre']+"</td>"+
                                "<td>"+args['descripcion']+"</td>"+    
                                "<td>"+args['precio']+"</td>"+
                                "<td>"+args['categoria']+"</td>"+
                                "<td>"+args['proveedor']+"</td>"+
                                "<td>"+args['existencia']+"</td>"+
                            "</tr>"
    
})
