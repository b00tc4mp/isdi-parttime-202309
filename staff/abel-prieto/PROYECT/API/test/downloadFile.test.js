import mongoose from 'mongoose'
import downloadFile from '../logic/downloadFile.js'

mongoose.connect('mongodb://127.0.0.1/hiinit')
    .then(() => {
        try {
            downloadFile('65e8bd456728f7c2d66bd330', '65eb3695de39ba551ad01d77')
                .then(() => console.log('file successfully download!'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })
    .catch(error => console.error(error))