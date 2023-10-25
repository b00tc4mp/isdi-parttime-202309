function indexOf(string, textToFind) {
   for (var i = 0; i < string.length; i++) {
      if (string[i] === textToFind)
         return i
   }

   return -1
}

