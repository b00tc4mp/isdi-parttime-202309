function includes(string, textToFind) {
  var lenghtOfText = textToFind.length; 

  var char1 // aqui me guardo la posición en el string del primer char de textToFind que encuentro
  var char2 // aqui me guardo la siguiente posición que encuentra

  var index = 0; // uso esta variable para poder aumentar el índice del textToFind

    if (lenghtOfText === 1){  // diferencio si la longitud del texto es 1

        for (var i = 0; i < string.length; i++){
            if (string[i] === textToFind[0])
            return true
        }

        return false

    }

    if (lenghtOfText > 1){ // o es mayor que 1

        for (var i = 0; i < string.length; i++){
            if (string[i] === textToFind[index]) { 

                char1 = i  // si encuentro una coincidencia, cha1 tiene el valor de la posición de la letra en la string
                distance = char1 - char2  //necesito una resta para asegurarme de que las letras son consecutivas
                char2 = char1 //a char2 le copio el valor de cha1 (para poder hacer la resta, pero con delay)
           
               if (lenghtOfText - 1 === index && distance === 1) { // me aseguro de que coja bien la posición del texto
                                                                    // aunque ahora no sé si hace falta...
                                                                    // lo que si que hace falta es comprobar 
                                                                    //la distancia entre las letras que encuentra
                 index = index + 1; //aumento el index para la próxima vuelta por si hay otra letra después
                 return true;
         
               } else {
                 index = index + 1; // aumento el index 
                 
               }
             } 
        }
        return false

    }
}


