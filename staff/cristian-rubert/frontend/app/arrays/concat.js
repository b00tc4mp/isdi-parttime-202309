function concat(array) {
    var newarray1 = []
    
    for(var i = 0; i < array.length; i++) {
       
        for(var k = 0; i < array.length; i++) {
            newarray1.push([array[i], array[k]]);

            }
                  
        }
        return newarray1
    }

// Este ejercicio concat lo que necesitamos es unir todos los array que existen en cada case

// tendra que ser una nueva variable la que contenga cada array nuevo para asi guardar y mostrar cada caso, lo utilizare como contenerdor

// for lo he intentado y como ya en la primera ronda valia +1 ya no podia ver la posicion 0 por eso he creado un else con un for en contra direccion