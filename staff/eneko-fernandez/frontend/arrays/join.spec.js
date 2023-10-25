console.log('Test join');

console.log('CASE for array [3,5,6,8,7,2] join([3,5,6,8,7,2]) results in 356872');
console.log(join([3, 5, 6, 8, 7, 2], ""));

console.log('CASE for array [3,5,6,8,7,2] join([3,5,6,8,7,2]) results in 3-5-6-8-7-2');
console.log(join([3, 5, 6, 8, 7, 2], "-"));

console.log('CASE for array [3,5] join([3,5]) results in 3,5');
console.log(join([3, 5], ","));

console.log('CASE for array [3, 5, 6, 8, 7, 2, 5, 6, 7] join([3, 5, 6, 8, 7, 2, 5, 6, 7]) results in 3 5 6 8 7 2 5 6 7 ');
console.log(join([3, 5, 6, 8, 7, 2, 5, 6, 7], " "));

