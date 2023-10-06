console.log("TEST includes");

console.log('Case for string "hola mundo" includes(h) results in true');
console.log(includes("hola mundo", "h"));

console.log('Case for string "hola mundo" includes(o) results in true');
console.log(includes("hola mundo", "o"));

console.log('Case for string "hola mundo" includes(m) results in true');
console.log(includes("hola mundo", "mu"));

console.log('Case for string "hola mundo" includes(und) results in true');
console.log(includes("hola mundo", "und"));

console.log('Case for string "hola mundo" includes(mue) results in false');
console.log(includes("hola mundo", "mue"));

console.log('Case for string "hola mundo" includes("") results in false');
console.log(includes("hola mundo", ""));