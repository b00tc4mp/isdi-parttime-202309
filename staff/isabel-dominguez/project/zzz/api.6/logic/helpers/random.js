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

function productName() {
    return `text-${Math.random()}`
}

function productDescription() {
    return `text-${Math.random()}`
}

function price(min, max) {
    return Math.random() * (max - min) + min
}

function productType() {
    const types = ['RawMaterial', 'Utensils', 'Packings']
    const randomIndex = Math.floor(Math.random() * types.length)
    return types[randomIndex]
}

const random = {
    name,
    email,
    password,
    productName,
    productType,
    image,
    price,
    productDescription
}

export default random