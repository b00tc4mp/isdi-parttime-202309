console.log('TEST indexOf')

// indexOf() = The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

console.log('CASE for weekDays array indexOf "Monday" should return 0')
console.log(indexOf(weekDays, 'Monday'))
//0

console.log('CASE for weekDays array indexOf "Thursday" should return 3')
console.log(indexOf(weekDays, 'Thursday'))
//3

console.log('CASE for weekDays array indexOf "February" should return -1')
console.log(indexOf(weekDays, 'February'))
//-1
