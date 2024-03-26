import mongoose from 'mongoose'
import createProduct from './createProduct.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        const price = parseFloat('4.95')

        createProduct('Aceite de Ricino', 'El aceite de ricino es un remedio muy conocido en el cuidado de la piel, manteniéndola hidratada. En el cuidado del cabello cabe mencionar que tiene propiedades antialopécicas con lo que podemos controlar la caída del cabello. Al mismo tiempo tiene nutriente que harán nuestro pelo suave al tacto al mismo tiempo que lo nutre. Las propiedades antibacterianas del aceite de ricino hace que sea indicado para el tratamiento de caspa. Con su uso se pueden tratar escamas, cicatrices y manchas de la piel. Asimismo, gracias a su acción espumante se pueden hacer jabones corporales y especialmente jabones para tratar el acné, debido a sus propiedades antimicrobianas. Además, el aceite de ricino se usa en el tratamiento de eczemas, dermatitis, inflamación de la piel, irritación o picazón gracias a su contenido en ácido ricinoleico. Contiene tocoferoles y vitamina E que favorecen su acción antioxidante.', 'https://www.cremas-caseras.es/6410-medium_default/aceite-de-ricino.jpg', price, 'RawMaterial')
            .then(() => {
                console.log('Successfully created product')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))