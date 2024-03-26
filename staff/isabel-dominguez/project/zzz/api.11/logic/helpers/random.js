import mongoose from 'mongoose'

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

function recipeName() {
    return `text-${Math.random()}`
}

function description() {
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

function recipeType() {
    const types = ['Hair', 'Body', 'Make-up', 'Fragrance', 'Treatment']
    const randomIndex = Math.floor(Math.random() * types.length)
    return types[randomIndex]
}

const randomProducts = (count) => {
    const products = []
    for (let i = 0; i < count; i++) {
        const product = new mongoose.Types.ObjectId()
        products.push(product)
    }
    return products
}

const random = {
    name,
    email,
    password,
    productName,
    productType,
    image,
    price,
    description,
    randomProducts,
    recipeName,
    recipeType
}

export default random