var ingreso = document.getElementById('formularioIngreso')
var usuario = document.getElementById('usuarioIngreso')
var password = document.getElementById('passwordIngreso')

ingreso.addEventListener('submit',function(recibeIngreso){
    recibeIngreso.preventDefault();
    console.log(usuario.value)
    console.log(password.value)

    //enviamos las credenciales al servidor
    window.comunicacion.enviaUsuario(usuario.value)
    window.comunicacion.enviaPass(password.value)

    //Si falla autenticacion mostramos alerta
    window.comunicacion.recibeMensaje(function(event,args){
        //alert(args)
        //dialog.showErrorBox("Error de Autenticacion", args);
        document.getElementById('usuarioIngreso').focus();
        let error = document.getElementById('loginFail')
        error.innerHTML = "CREDENCIALES INVALIDAS"
        if(usuario.focus()){
            usuario.value = ""
            password.value = ""
        }
        setTimeout(() => {
            error.innerHTML = "  "
          }, "2000");

    })

})





