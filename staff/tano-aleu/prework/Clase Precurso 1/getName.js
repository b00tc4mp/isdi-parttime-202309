const getUserName = () => {
    const name = prompt("Hi, tell me your name");
    debugger;
    if(isNaN(name) !== true) {
        alert("Escribe un nombre valido");
        return;
    }

    if(name.length < 3){
        alert("Escribe un nombre valido")
        return;
    }

    if(name === "") {
        alert("Escribe un nombre valido")
        return;
    }

    
    return name;
};

getUserName();