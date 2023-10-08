console.log('TEST pop')

const plants = ["broccoli", "cauliflower", "cabbage", "kale"];

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "kale"');
console.log(plants.pop());
// kale

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "cabbage"');
console.log(plants.pop());
// cabbage

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "cauliflower"');
console.log(plants.pop());
// cauliflower

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "brocoli"');
console.log(plants.pop());
// brocoli

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "undefined"');
console.log(plants.pop());
// "undefined"