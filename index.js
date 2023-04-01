var ingreso = document.getElementById('formularioIngreso')
var usuario = document.getElementById('usuarioIngreso')
var password = document.getElementById('passwordIngreso')

ingreso.addEventListener('submit',function(event, args){
    event.preventDefault();
    //console.log(usuario.value)
    //console.log(password.value)
    usuario.focus()
    //enviamos las credenciales al servidor
    window.comunicacion.enviaCredenciales([usuario.value,password.value])
    //window.comunicacion.enviaPass(password.value)

    //Si falla autenticacion mostramos alerta
    window.comunicacion.recibeMensaje(function(event,args){

        
        document.getElementById('usuarioIngreso').focus();
        let error = document.getElementById('loginFail')
        error.innerHTML = args
        if(usuario.focus()){
            usuario.value = ""
            password.value = ""
        }
        setTimeout(() => {
            error.innerHTML = "  "
          }, "2000");

    })
})







