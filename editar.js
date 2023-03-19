var tablaEditar = document.getElementById('tablaEditar')
var botonGuardar = document.getElementById('botonGuardar')
var botonRegresar = document.getElementById('botonRegresar')


window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    tablaEditar.innerHTML += "<tr>"+
                                "<th scope=\"row\">"+args['codigo']+"</th>"+ 
                                "<td><input value=\""+args['nombre']+"\"></input></td>"+
                                "<td><input value=\""+args['descripcion']+"\"></input></td>"+
                                "<td><input value=\""+args['precio']+"\"></input></td>"+
                                "<td><input value=\""+args['categoria']+"\"></input></td>"+
                                "<td><input value=\""+args['proveedor']+"\"></input></td>"+
                                "<td><input value=\""+args['existencia']+"\"></input></td>"+
                            "</tr>"

    botonGuardar.addEventListener('click', function(){
        var prueba = args['codigo']
        console.log(prueba)
    })

    
    
})


