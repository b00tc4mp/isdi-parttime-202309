import mongoose from 'mongoose'
import createRecipe from './createRecipe.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        createRecipe(
            'Aceite para masajes',
            'Desinfecta primero todos los utensilios que vayas a utilizar. Esto lo haces pulverizando alcohol sobre ellos y dejándolos secar.\nAñade todos los ingredientes, uno a uno, en un recipiente y mezclar.\n¡Envasa y listo! Ya puedes disfrutar de tu champú seco.',
            'https://5.imimg.com/data5/SELLER/Default/2022/11/IO/HK/EI/2821926/clove-oil-500x500.jpg',
            ['65e707e5ffe20bd307fe39f4', '65e708dbcdf01598022fe0ad', '65e7071ee2e93c526809e1b3'],
            'Treatment'
        )
            .then(() => {
                console.log('Successfully created recipe')
                mongoose.disconnect();
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))