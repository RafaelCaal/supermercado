const {ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        enviaCredenciales: (args) => ipcRenderer.send('enviaCredenciales', args),
        //enviaPass: (pass) => ipcRenderer.send('enviaPass', pass),
        recibeMensaje: (mensaje) => ipcRenderer.on('recibeMensaje', mensaje),
        enviaProveedor: (enviaProv) => ipcRenderer.send('enviaProveedor', enviaProv),
        recibeProveedor: (reciProv) => ipcRenderer.on('recibeProveedor', reciProv)

    }
)