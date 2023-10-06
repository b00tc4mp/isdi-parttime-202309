console.log('TEST pop')

const plants = ["broccoli", "cauliflower", "cabbage", "kale"];

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "["broccoli", "cauliflower", "cabbage"]"');
console.log(plants.pop());
console.log(plants)
// ["broccoli", "cauliflower", "cabbage"]

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "["broccoli", "cauliflower"]');
console.log(plants.pop());
console.log(plants)
// ["broccoli", "cauliflower"]

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "["broccoli"]');
console.log(plants.pop());
console.log(plants)
// ["broccoli"]

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "[]"');
console.log(plants.pop());
console.log(plants)
// []

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "undefined"');
console.log(plants.pop());
console.log(plants)
// "undefined"