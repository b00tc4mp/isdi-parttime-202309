/*function includes(string, searchTerm) {
  // Looking for one search term
  if (searchTerm === 1) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === searchTerm) return true
    }
    return false
  } else if (searchTerm.length === 2) {
    /*
STEPS
-if searchTerm.length === 2
-store the two search terms as separate variables
-loop through the array to check if the first variable coincides with the character being checked in the string. If it does, check that the next character(i+1) coincides with the second variable. If it does return true. If not return false.

*/
/*var charOne = searchTerm[0]
    var charTwo = searchTerm[1]
    for (var i = 0; i < string.length; i++) {
      if (string[i] === charOne && string[i + 1] === charTwo) return true
    }
    return false
  } else if (searchTerm.length === 3) {
    /*
STEPS
-if searchTerm.length === 3
-store the three search terms as separate variables
-loop through the array to check if the first variable coincides with the character being checked in the string. If it does, check that the next character(i+1) coincides with the second variable. If it does, check that the next character(i+2) coincides with the third variable. If it does return true. If not return false.

    var charOne = searchTerm[0]
    var charTwo = searchTerm[1]
    var charThree = searchTerm[2]
    for (var i = 0; i < string.length; i++) {
      if (
        string[i] === charOne &&
        string[i + 1] === charTwo &&
        string[i + 2] === charThree
      )
        return true
    }
    return false
  } else if (searchTerm.length === 4) {
    
    /*
STEPS
-if searchTerm.length === 4
-store the three search terms as separate variables
-loop through the array to check if the first variable coincides with the character being checked in the string. If it does, check that the next character(i+1) coincides with the second variable. If it does, check that the next character(i+2) coincides with the third variable. If it does, check that the next character(i+3) coincides with the fourth variable. If it does return true. If not return false.
*/

// STEPS:

// - loop through searchTerm to return all characters.

// string[i] === searchTerm[0]
// string[i + 1] === searchTerm[1]
// string[i + 2] === searchTerm[2]
// string[i + 3] === searchTerm[3]

function includes(string, searchTerm) {
  for (var i = 0; i <= string.length - searchTerm.length; i++) {
    var found = true
    for (var j = 0; i < searchTerm.length; j++) {
      if (string[i + j] !== searchTerm[j]) {
        found = false
        break
      }
    }
    if (found) {
      return true
    }
  }
  return false
}
