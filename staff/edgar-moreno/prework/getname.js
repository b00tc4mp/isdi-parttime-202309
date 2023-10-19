
// const getUserName = prompt("Hi, tell me your name!");
// //promp es un método "parecido" a console.log(), con la diferencia que salta un popup en pantalla y nos permite escribirle numero sy letras

// //guardamos lo que escriba en getusername
// //Debemos limitar que entrada nos pondran en la funcion

// //Ejemplo: No quiero que te llames 25, necesitamos comprobar que sea siempre un string
// //usaremos siempre la igualdad estricta, la otra puede provocar fallos

// CODIGO

// if(typeof(getUserName) !== "number"){

//     console.log("Introduce un nombre válido");

// }

// //PARTE 1

//Convertimos el prompt en una funcion, una arrow function
//la funcion usa el promp para pedir el nombre y despues buscamos las fallas para que el usuario haga lo que queremos.
//usamos el debugger para la consola de chrome. Nos dice por donde pasa nuestro codigo y lo para en la linea que lo escribamos, IMPORTANTE: USAR EL DEBUGGER Y DESPUES
//ELIMINARLO DEL CODIGO


// const getUserName = () =>{
//     debugger;
// const name = prompt("Hi, tell me your name!");
// debugger;
// if(isNaN(name) !== true){

//     alert("Escribe un nombre válido");
//     return;
// }
// if (name.length < 3){

//     alert("Escribe un nombre válido");
//     return;
// }
// if (name === ""){

//     alert("Escribe un nombre válido");
//     return;
// }


// return name;

// };

// getUserName();

const getUserName = () => {

    const userName = prompt("Enter your name please!");

    if(typeof userName !== "string"){

        alert("WRONG Name!");
        return getUserName();
    
    };

}

blur.h





