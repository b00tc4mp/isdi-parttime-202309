import mongoose from 'mongoose'
import createRecipe from './createRecipe.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        createRecipe(
            'Ambientador natural Mikado',
            'Te presentamos esta maravillosa receta de un ambientador mikado ideal para el invierno. Tiene grandes beneficios gracias a los aceites esenciales que lo conforman como el Aceite Esencial Clavo que es un excelente protector inmunitario, tiene propiedades antibacterianas, antifúngicas y antivirales, entre otras.',
            'https://shop.r10s.jp/doigt/cabinet/shohin01/100002997.gif',
            ['65e755fd2cf4b0b781075ed3', '65e7086d656bde907fbcadc4', '65e70670666c97d60d88f0b8'],
            'Treatment'
        )
            .then(() => {
                console.log('Successfully created recipe')
                mongoose.disconnect();
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))