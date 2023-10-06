function includes(string, textToFind) {
   if (string.length !== 0 && textToFind.length === 0) {
      return false
   }

   for (var i = 0; i < string.length; i++) {
      var includes = true

      for (var j = 0; j < textToFind.length; j++) {
         if (string[i + j] !== textToFind[j]) {
            includes = false
         }
      }

      if (includes) return true
   }

   return false
}

