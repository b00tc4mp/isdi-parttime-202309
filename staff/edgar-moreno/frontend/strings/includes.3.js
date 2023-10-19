
function includes(string, termSearch) {
    // Looking for one search term
    if (termSearch === 1) {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === termSearch) return true
      }
      return false
    } else if (termSearch.length === 2) {
      /*
  STEPS
  -if termSearch.length === 2
  -store the two search terms as separate variables
  -loop through the array to check if the first variable coincides with the character being checked in the string. If it does, check that the next character(i+1) coincides with the second variable. If it does return true. If not return false.
  
  */
      var charOne = termSearch[0]
      var charTwo = termSearch[1]
      for (var i = 0; i < string.length; i++) {
        if (string[i] === charOne && string[i + 1] === charTwo) return true
      }
      return false
    }
  }