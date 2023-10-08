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
  } else if (termSearch.length === 3) {
    /*
STEPS
-if termSearch.length === 3
-store the three search terms as separate variables
-loop through the array to check if the first variable coincides with the character being checked in the string. If it does, check that the next character(i+1) coincides with the second variable. If it does, check that the next character(i+2) coincides with the third variable. If it does return true. If not return false.
*/
    var charOne = termSearch[0]
    var charTwo = termSearch[1]
    var charThree = termSearch[2]
    for (var i = 0; i < string.length; i++) {
      if (
        string[i] === charOne &&
        string[i + 1] === charTwo &&
        string[i + 2] === charThree
      )
        return true
    }
    return false
  } else if (termSearch.length === 4) {
    /*
STEPS
-if termSearch.length === 4
-store the three search terms as separate variables
-loop through the array to check if the first variable coincides with the character being checked in the string. If it does, check that the next character(i+1) coincides with the second variable. If it does, check that the next character(i+2) coincides with the third variable. If it does, check that the next character(i+3) coincides with the fourth variable. If it does return true. If not return false.
*/
    var charOne = termSearch[0]
    var charTwo = termSearch[1]
    var charThree = termSearch[2]
    var charFour = termSearch[3]

    for (var i = 0; i < string.length; i++) {
      if (
        string[i] === charOne &&
        string[i + 1] === charTwo &&
        string[i + 2] === charThree &&
        string[i + 3] === charFour
      )
        return true
    }
    return false
  }
}
