// import SerialPort from 'serialport'
// const Readline = SerialPort.parsers.Readline

// const connectArduino = (serialPath) => {
//     const port = new SerialPort(serialPath, { baudRate: 9600 })
//     const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

//     parser.on('data', (data) => {
//         // Aquí procesaré los datos recibidos de Arduino
//         console.log(data)
//     });

//     return {
//         sendData: (data) => {
//             port.write(data, (err) => {
//                 if (err) {
//                     return console.log('Error on write: ', err.message)
//                 }
//                 console.log('message written', data)
//             })
//         }
//     }
// }

// export default connectArduino