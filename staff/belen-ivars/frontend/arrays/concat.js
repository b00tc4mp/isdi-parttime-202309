function concat(...arrays) {
	var newArray = [];

	for (var i = 0; i < arrays.length; i++) {
		newArray[newArray.length] = [...arrays[i]]
	}

	return newArray
}

/* INTENTAR RESOLVER CON "ARGUMENTS OBJECT", de JAVASCRIPT 5
	DESPUÉS HACER CON JAVASCRIPT 6 rest operator & spread operator


function concat(array1, array2, array3) {

var newArray = [];
	for (var i = 0; i < array1.length; i++) {
		newArray[newArray.length] = array1[i]
	}

	for (var i = 0; i < array2.length; i++) {
		newArray[newArray.length] = array2[i]
	}

	for (var i = 0; i < array3.length; i++) {
		newArray[newArray.length] = array3[i]
	}

	return newArray
}
-----

function concat(array1, array2, array3) {
	var newArray = [];

	for (var i = 0; i < array1.length; i++) {

		var element = array1[i]
		newArray.push(element)
	}

	for (var i = 0; i < array2.length; i++) {

		var element = array2[i]
		newArray.push(element)
	}

	for (var i = 0; i < array3.length; i++) {

		var element = array3[i]
		newArray.push(element)
	}
	return newArray
}
for (var i = 0; i < frase.length; i++) {

		var element = frase[i]
		newArray.push(element)
*/