var tablaEditar = document.getElementById('tablaEditar')
var botonGuardar = document.getElementById('botonGuardar')
var botonDeshacer = document.getElementById('botonDeshacer')
var botonRegresar = document.getElementById('botonRegresar')
var mensajeCambios = document.getElementById('mensajeCambios')


window.comunicacion.recibeProveedor(function(event,args){
    console.log(args)

    //guardamos los valores originales del JSON
    var originNombre = args['nombre']
    var originDescripcion = args['descripcion']
    var originPrecio = args['precio']
    var originCategoria = args['categoria']
    var originProveedor = args['proveedor']
    var originExistencia = args['existencia']

    //enviamos los valores del JSON a los campos de texto
    tablaEditar.innerHTML += "<tr>"+
                                "<th scope=\"row\">"+args['codigo']+"</th>"+ 
                                "<td><input type=\"text\" id=\"tempNom\" value=\""+args['nombre']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempDes\" value=\""+args['descripcion']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempPre\" value=\""+args['precio']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempCat\" value=\""+args['categoria']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempPro\" value=\""+args['proveedor']+"\"></input></td>"+
                                "<td><input type=\"text\" id=\"tempExi\" value=\""+args['existencia']+"\"></input></td>"+
                            "</tr>"


     /*
     Los campos de texto seran antes de presionar guardar para
     poder ser utilizados por ambos botones guardar y deshacer.
     Serviran paraa comparar con los valores originales,
     si son diferenes significa que han habido cambios y se
     substituiran los valores originales por los nuevos.
     */
     var tempNombre = document.getElementById('tempNom')
     var tempDescripcion = document.getElementById('tempDes')
     var tempPrecio = document.getElementById('tempPre')
     var tempCategoria = document.getElementById('tempCat')
     var tempProveedor = document.getElementById('tempPro')
     var tempExistencia = document.getElementById('tempExi')
     var cambio = false;
    botonGuardar.addEventListener('click', function(){
        //console.log(originNombre)
        //console.log(tempNombre.value)
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
        }else{
            cambio = true;
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

