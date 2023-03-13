 var res = document.getElementById('respuesta')

 window.comunicacion.recibeMensaje(function(event,args){
    res.innerHTML = "&emsp;&emsp;&emsp;" + args
})