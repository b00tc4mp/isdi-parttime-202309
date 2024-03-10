import mongoose from 'mongoose'
import createProduct from './createProduct.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        const price = parseFloat('4.91')

        createProduct('Envase tubo de cartón stick labial', 'Envase para crear barras de labios de color y bálsamo labial ¡sin plásticos! El envase al ser de cartón es fácilmente reciclable y permite crear un producto acabado totalmente sostenible. El envase es cilíndrico y con forma de tubo. Fácil de usar, se compone de la base y una tapadera, al igual que un stick labial convencional. Se debe tener en cuenta que el sistema que utiliza es push up, por lo que no incorpora ningún elemento giratorio, pulsando en la parte de abajo de la base se puede hacer uso del producto acabado. Se aconseja durante el envasado tener mucha precaución a la hora de tocar el envase con las manos manchadas o con algún producto graso ya que quedará manchado. El envase admite hasta 12 ml, utilizando la base hasta su tope.', 'https://hellokitchen.com.au/wp-content/uploads/2021/09/C320800.jpg', price, 'Packings')
            .then(() => {
                console.log('Successfully created product')
                mongoose.disconnect()
            })
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))