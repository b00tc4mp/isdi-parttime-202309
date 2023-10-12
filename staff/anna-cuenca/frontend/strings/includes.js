function includes(string, textToFind) {
 // var lenghtOfText = textToFind.length; 

  var indexStart // aqui me guardo la posición en el string del primer char de textToFind que encuentro
  var indexEnd // aqui me guardo la siguiente posición que encuentra

  var index = 0; // uso esta variable para poder aumentar el índice del textToFind

    if (textToFind.length === 1){  // diferencio si la longitud del texto es 1

        for (var i = 0; i < string.length; i++){
          console.count('loops')
            if (string[i] === textToFind[0]) 
            return true
        }

        return false

    } else if (textToFind.length > 1){ // o es mayor que 1

        for (var i = 0; i < string.length; i++){
          console.count('loops')
            if (string[i] === textToFind[index]) { 

                indexStart = i  // si encuentro una coincidencia, cha1 tiene el valor de la posición de la letra en la string
                distance = indexStart - indexEnd  //necesito una resta para asegurarme de que las letras son consecutivas
                indexEnd = indexStart //a char2 le copio el valor de cha1 (para poder hacer la resta, pero con delay)
           
               if (textToFind.length - 1 === index && distance === 1) { // me aseguro de que la palabra está completa
                                                                    
                                                         //compruebo la distancia entre las letras que encuentra
                 //index = index + 1; 
                 return true;
         
               } else {
                 index = index + 1; // aumento el index 
                 
               }
             } 
        }
        return false

    }
}


