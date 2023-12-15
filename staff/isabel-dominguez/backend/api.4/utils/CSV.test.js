const CSV = require('./CSV')

// CSV.loadAsObject('./data/users.csv', (error, users) => {
//     if (error) {
//         console.error(error)

//         return
//     }

//     CSV.saveFromObject('./data/users2.csv', users, error => {
//         if (error) {
//             console.error(error)

//             return
//         }

//         console.log('end')
//     })
// })

const csv = `id,name,email,password\r
amhkljhnhc4,Cala Bacin,cara@bassseta.com,123123123\r
9nbvjt5wugo,Zana Horia,zana@horia.com,234234234\r
6z32ut2oz4c0,tom ate,tom@ate.com,123123123`

const users = CSV.parse(csv)
console.log(users)

// $ node utils/CSV.test.js
// [
//   {
//     id: 'amhkljhnhc4',
//     name: 'Cala Bacin',
//     email: 'cara@bassseta.com',
//     password: '123123123'
//   },
//   {
//     id: '9nbvjt5wugo',
//     name: 'Zana Horia',
//     email: 'zana@horia.com',
//     password: '234234234'
//   },
//   {
//     id: '6z32ut2oz4c0',
//     name: 'tom ate',
//     email: 'tom@ate.com',
//     password: '123123123'
//   }
// ]

const csv2 = CSV.stringify(users)
console.log(csv2)

// id,name,email,password
// amhkljhnhc4,Cala Bacin,cara@bassseta.com,123123123
// 9nbvjt5wugo,Zana Horia,zana@horia.com,234234234
// 6z32ut2oz4c0,tom ate,tom@ate.com,123123123