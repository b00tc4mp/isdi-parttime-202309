console.log('TEST push')

const animals = ["pigs", "goats", "sheep"];

console.log('CASE for array animals = ["pigs", "goats", "sheep"] push "cows" results "["pigs", "goats", "sheep", "cows"]"');
console.log(push(animals, "cows"));
console.log(animals)
// ["pigs", "goats", "sheep", "cows"]

console.log('CASE for array animals = ["pigs", "goats", "sheep"] push "chickens", "cats" results "["pigs", "goats", "sheep", "cows", "chickens", "cats"]"');
console.log(push(animals, "chickens", "cats"));
console.log(animals)
// ["pigs", "goats", "sheep", "cows", "chickens", "cats"]

console.log('CASE for array animals = ["pigs", "goats", "sheep"] push "Lynx", "Cheetahs", "dogs" results "["pigs", "goats", "sheep", "cows", "chickens", "cats", "Lynx", "Cheetahs", "dogs"]"');
console.log(push(animals, "Lynx", "Cheetahs", "dogs"));
console.log(animals)
// ["pigs", "goats", "sheep", "cows", "chickens", "cats", "Lynx", "Cheetahs", "dogs"]


