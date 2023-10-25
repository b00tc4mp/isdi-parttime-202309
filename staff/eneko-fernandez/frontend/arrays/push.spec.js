console.log('Test push');

console.log('CASE for array [3,5,6,8,7,2] push(6) results in [3,5,6,8,7,125]');
console.log(push([3, 5, 6, 8, 7, 2], 125));

console.log('CASE for array [3,5] push("hola mundo") results in [3,5, "hola mundo"]');
console.log(push([3, 5], "hola mundo"));

console.log('CASE for array [3] push(56) results in [3,56]');
console.log(push([3], 56));
