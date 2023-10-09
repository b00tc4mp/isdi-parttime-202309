function includes(string, textToFind) {
  var lenghtOfText = textToFind.length; 
  var char1 // aqui me guardo la posición en el string del primer char de textToFind que encuentro
  var char2 // aqui me guardo la siguiente posición que encuentra

  var index = 0; // uso esta variable para poder aumentar el índice del textToFind

  for (var i = 0; i < string.length; i++) {

    // me recorro todo el string
    if (string[i] === textToFind[index]) {

       char1 = i  
       distance = char1 - char2 
       char2 = char1
  

      if (lenghtOfText - 1 === index && distance === 1) {
        index = index + 1;
        return true;

      } else {
        index = index + 1;
        //foundMatch = false;
      }
    } 
  }
  return false;
} 

// falta diferenciar si es una letra o más y ya estaría
