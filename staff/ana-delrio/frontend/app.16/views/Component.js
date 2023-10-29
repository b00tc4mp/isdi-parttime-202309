class Component {
    constructor(container) {
        this.container = container
    }

    // sobre el contenedor de este component lo centralizamos para encenderlo, como un método 
    show() {
        this.container.style.display = ''
    }

    // sobre el contenedor de este component lo centralizamos para apagarlo, como un método 
    hide() {
        this.container.style.display = 'none'
    }
}