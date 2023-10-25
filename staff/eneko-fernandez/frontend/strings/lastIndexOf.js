function lastIndexOf(string, textToFind) {
   for (var i = string.length - 1; i >= 0; i--) {
      if (string[i] === textToFind)
         return i
   }

   return -1
}

