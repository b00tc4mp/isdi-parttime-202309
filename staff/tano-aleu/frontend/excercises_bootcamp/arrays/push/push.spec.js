console.log('TEST push')

const animals = ["pigs", "goats", "sheep"];

console.log('CASE for array animals = ["pigs", "goats", "sheep"] push "cows" results "4"');
console.log(push(animals, "cows"));
// 4

console.log('CASE for array animals = ["pigs", "goats", "sheep"] push "chickens", "cats" results "6"');
console.log(push(animals, "chickens", "cats"));
// 6

console.log('CASE for array animals = ["pigs", "goats", "sheep"] push "Lynx", "Cheetahs", "dogs" results "9"');
console.log(push(animals, "Lynx", "Cheetahs", "dogs"));
// 9
