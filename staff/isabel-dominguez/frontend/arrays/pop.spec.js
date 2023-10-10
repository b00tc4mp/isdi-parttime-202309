console.log('TEST pop')

const plants = ["broccoli", "cauliflower", "cabbage", "kale"];

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "kale"');
console.log(pop(plants));
// kale

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "cabbage"');
console.log(pop(plants));
// cabbage

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "cauliflower"');
console.log(pop(plants));
// cauliflower

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "brocoli"');
console.log(pop(plants));
// brocoli

console.log('CASE for array plants = ["broccoli", "cauliflower", "cabbage", "kale"] results in "undefined"');
console.log(pop(plants));
// "undefined"