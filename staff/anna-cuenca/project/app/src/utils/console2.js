window.console2 = { // usando windows, lo que hacemos que es que se cargue globalmente
    log(message, type = 'debug') {
        let color = 'yellowgreen'
        let back = 'transparent'

        if (type === 'info')
            color = 'dodgerblue'

        else if (type === 'warn')
            color = 'gold'

        else if (type === 'error')
            color = 'tomato'

        else if (type === 'fatal') {
            color = 'white'
            back = 'tomato'
        }

        console.log(`%c${message}`, `color: ${color}; background-color: ${back}; font-weight: bold;`)

    }
}