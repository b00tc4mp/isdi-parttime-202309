import mongoose from 'mongoose'
import createRecipe from './createRecipe.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        createRecipe(
            'Perfume natural casero',
            'Desinfecta primero todos los utensilios que vayas a utilizar. Esto lo haces pulverizando alcohol sobre ellos y dejándolos secar. <br /> En un recipiente añade uno a uno los ingredientes previamente pesados. <br /> Remueve la mezcla. <br /> Envasa el producto.',
            'https://namniche.com/wp-content/uploads/2023/06/chai-nuoc-hoa-dat-nhat-the-gioi.jpg',
            ['65e755fd2cf4b0b781075ed3', '65e7086d656bde907fbcadc4', '65e70670666c97d60d88f0b8'],
            'Fragrance'
        )
            .then(() => {
                console.log('Successfully created recipe')
                mongoose.disconnect();
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))