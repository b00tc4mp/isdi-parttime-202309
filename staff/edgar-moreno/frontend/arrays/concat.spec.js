console.log('TEST concat')
// concat() = The concat() method of Array instances is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.

console.log(
  "CASE for concat pokemon array and poke balls array should return the array ['Charmander', 'Bulbasaur', 'Mewto', 'Squirtle', 'Tyranitar', 'Poke ball', 'Super ball', 'Ultra ball', 'Master ball']"
)
console.log(concat(pokemon, pokeBalls))
// ['Charmander', 'Bulbasaur', 'Mewto', 'Squirtle', 'Tyranitar', 'Poke ball', 'Super ball', 'Ultra ball', 'Master ball']

console.log(
  "CASE for concat plants array and animals array should return the array ['Poke ball', 'Super ball', 'Ultra ball', 'Master ball','Charmander', 'Bulbasaur', 'Mewto', 'Squirtle', 'Tyranitar' ]"
)
console.log(concat(pokeBalls, pokemon))
// ['Poke ball', 'Super ball', 'Ultra ball', 'Master ball','Charmander', 'Bulbasaur', 'Mewto', 'Squirtle', 'Tyranitar' ]"

console.log(
  "CASE for concat pokemon array and masters array should return the array 'ReferenceError: masters is not defined'"
)
console.log(concat(pokemon, masters))
// ReferenceError: masters is not defined