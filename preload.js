const {ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        enviaUsuario: (user) => ipcRenderer.send('enviaUsuario', user),
        enviaPass: (pass) => ipcRenderer.send('enviaPass', pass),
        recibeMensaje: (mensaje) => ipcRenderer.on('recibeMensaje', mensaje)

    }
)