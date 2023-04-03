var tablaEditar = document.getElementById('tablaEditar')
var botonGuardar = document.getElementById('botonGuardar')
var botonDeshacer = document.getElementById('botonDeshacer')
var botonRegresar = document.getElementById('botonRegresar')
var mensajeCambios = document.getElementById('mensajeCambios')


window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)
    var guardaEstado = [];
    var estado = {
        "idproducto" : " ",
        "nombreproducto" : " ",
        "descripcionproducto" : " ",
        "precio" : " ",
        "categoria" : " ", 
        "idproveedor" : " ",
        "nombreproveedor" : " ",
        "existencia" : " "
    }
    console.log(estado.idproducto)

    //enviamos los valores del JSON a los campos de texto
    tablaEditar.innerHTML += "<tr>"+
                                "<th scope=\"row\" id=\"tempId\">"+args[0]['idproducto']+"</th>"+ 
                                "<td><input type=\"text\" id=\"tempNom\" value=\""+args[0]['nombreproducto']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempDes\" value=\""+args[0]['descripcionproducto']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempPre\" value=\""+args[0]['precioproducto']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempCat\" value=\""+args[0]['categoria']+"\"></input></td>"+
                                "<th scope=\"row\" id=\"tempIdPro\">"+args[1]['idproveedor']+"</th>"+ 
                                "<td><input type=\"text\" id=\"tempPro\" value=\""+args[1]['nombreproveedor']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempExi\" value=\""+args[0]['existencia']+"\"></input></td>"+
                            "</tr>"
    
    
    //almacenamos el estado original en un JSON y luego en un arreglo de estados
    var estado = {
        "idproducto" : args[0].idproducto,
        "nombreproducto" : document.getElementById('tempNom').value,
        "descripcionproducto" : document.getElementById('tempDes').value,
        "precioproducto" : document.getElementById('tempPre').value,
        "categoria" : document.getElementById('tempCat').value,
        "idproveedor": args[1].idproveedor,
        "nombreproveedor" : document.getElementById('tempPro').value,
        "existencia" : document.getElementById('tempExi').value
    }
    console.log(estado)
    guardaEstado.push(estado)
    console.log(guardaEstado)
    

    botonGuardar.addEventListener('click', function(){
        estado = {
            "idproducto" : args[0].idproducto,
            "nombreproducto" : document.getElementById('tempNom').value,
            "descripcionproducto" : document.getElementById('tempDes').value,
            "precioproducto" : document.getElementById('tempPre').value,
            "categoria" : document.getElementById('tempCat').value,
            "idproveedor": args[1].idproveedor,
            "nombreproveedor" : document.getElementById('tempPro').value,
            "existencia" : document.getElementById('tempExi').value
        }
        guardaEstado.push(estado)
        console.log(guardaEstado)
        if(guardaEstado[guardaEstado.length-2].nombreproducto == guardaEstado[guardaEstado.length-1].nombreproducto &&
           guardaEstado[guardaEstado.length-2].descripcionproducto == guardaEstado[guardaEstado.length-1].descripcionproducto &&
           guardaEstado[guardaEstado.length-2].precioproducto == guardaEstado[guardaEstado.length-1].precioproducto &&
           guardaEstado[guardaEstado.length-2].categoria == guardaEstado[guardaEstado.length-1].categoria &&
           guardaEstado[guardaEstado.length-2].nombreproveedor == guardaEstado[guardaEstado.length-1].nombreproveedor &&
           guardaEstado[guardaEstado.length-2].existencia == guardaEstado[guardaEstado.length-1].existencia){
            console.log('no hay cambios')
            //Si no hay cambios eliminamos el ultimo registro para mantener el arreglo unicamente con cambios
            guardaEstado.pop()
            //informamo al usuario que no se han hecho cambios
            mensajeCambios.innerHTML = "No Hay Cambios"
            setTimeout(() => {
                mensajeCambios.innerHTML  = "  "
            }, "2000");
        }else{
            console.log('hay cambios')
            console.log(guardaEstado[guardaEstado.length-1])
            //var x = guardaEstado.length-1
            //console.log(x)
            //enviamos el ultimo indice del arreglo que es el que ha guardado los cambios
            window.comunicacion.vent_edit_envia([guardaEstado[guardaEstado.length-1]])
            //informamoos al usuario que se guardaron los cambios
            mensajeCambios.innerHTML = "Cambios Guardados!"
            setTimeout(() => {
                mensajeCambios.innerHTML  = "  "
            }, "2000");
        }

    })   
    
    /*
    restablecemos los valores originales de todos los campos de texto
    */
    botonDeshacer.addEventListener('click', function(){
        if(originNombre == tempNombre.value &&
            originDescripcion == tempDescripcion.value &&
            originPrecio == tempPrecio.value &&
            originCategoria == tempCategoria.value &&
            originProveedor == tempProveedor.value &&
            originExistencia == tempExistencia.value){
            cambio = false;
            mensajeCambios.innerHTML = "No Hay Cambios"
            setTimeout(() => {
                mensajeCambios.innerHTML  = "  "
            }, "2000");
        } else {
            tempNombre.value = originNombre
            tempDescripcion.value = originDescripcion
            tempPrecio.value = originPrecio
            tempCategoria.value = originCategoria
            tempProveedor.value = originProveedor
            tempExistencia.value = originExistencia  
            mensajeCambios.innerHTML = "Valores Originales Restablecidos"
            setTimeout(() => {
                mensajeCambios.innerHTML  = "  "
            }, "2000");
            }
        })



})


// Boton regresar
botonRegresar.addEventListener("click", function(event, args){
    console.log('estoy regresando')
    window.close();
})

