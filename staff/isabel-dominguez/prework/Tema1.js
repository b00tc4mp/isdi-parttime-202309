const data = [
    { name: "Bob", age: 30 },
    { name: "Dan", age: 21 },
    { name: "Alice", age: 25 },
    { name: "Isabel", age: 31 },
    { name: "John", age: 33 },
];

for (let i = 0; i < data.length; i++) {
    if (data[i].name === "Isabel" && data[i].age === 31) {
        console.log("We found your data! Your name is " + data[i].name + " and your age is " + data[i].age);
    }
}
// También se puede escribir así la concatenación

console.log(`We found your data! Your name is ${data[i].name} and your age is ${data[i].age}`);