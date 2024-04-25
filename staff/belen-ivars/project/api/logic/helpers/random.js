function name() {
	return `name-${Math.random()}`
}

function email() {
	return `e-${Math.random()}@mail.com`
}

function password() {
	return `password-${Math.random()}`
}

function image() {
	return `image-${Math.random()}`
}

function text() {
	return `text-${Math.random()}`
}

function ingredientName() {

	const ingredientNames = ['harina', 'azúcar', 'sal', 'aceite', 'leche', 'huevos', 'mantequilla', 'levadura', 'chocolate', 'vainilla'];

	const randomIngredient = ingredientNames[Math.floor(Math.random() * ingredientNames.length)];

	return randomIngredient;
}

function ingredientObject() {

	const ingredientNames = ['harina', 'azúcar', 'sal', 'aceite', 'leche', 'huevos', 'mantequilla', 'levadura', 'chocolate', 'vainilla'];

	const randomIngredientName = ingredientNames[Math.floor(Math.random() * ingredientNames.length)];

	const randomIngredient = {
		id: Math.random().toString(36).substring(7),
		name: randomIngredientName
	}

	return randomIngredient;
}

function diet() {
	const dietNames = ['glutenfree', 'vegan', 'vegetarian'];

	const randomDiet = dietNames[Math.floor(Math.random() * dietNames.length)];

	return randomDiet;
}

function complexity() {
	const complexityLevel = ['easy', 'regular', 'complex'];

	const randomComplexity = complexityLevel[Math.floor(Math.random() * complexityLevel.length)];

	return randomComplexity;
}

function method() {
	const methodCook = ['oven', 'steamed', 'microwave', 'grill', 'fresh', 'cooked'];

	const randomMethod = methodCook[Math.floor(Math.random() * methodCook.length)];

	return randomMethod;
}

function id() {
	return `id-${Math.random()}`
}

const random = {
	name,
	email,
	password,
	image,
	text,
	ingredientName,
	ingredientObject,
	diet,
	complexity,
	method,
	id
}

export default random