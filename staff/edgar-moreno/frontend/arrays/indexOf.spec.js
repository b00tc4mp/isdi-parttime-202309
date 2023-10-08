console.log('TEST indexOf')

// indexOf() = The indexOf() method of Array instances returns the first index at which a given element can be found in the array, 
//or -1 if it is not present.

const subjects = [
  'Maths',
  'English',
  'Music',
  'Art',
  'Physics',
  'Biology',
  'Chemistry',
]

console.log('CASE for subjects array indexOf "Maths" should return 0')
console.log(indexOf(subjects, 'Maths'))
//0

console.log('CASE for subjects array indexOf "Art" should return 3')
console.log(indexOf(subjects, 'Art'))
//3

console.log('CASE for subjects array indexOf "History" should return -1')
console.log(indexOf(subjects, 'History'))
//-1