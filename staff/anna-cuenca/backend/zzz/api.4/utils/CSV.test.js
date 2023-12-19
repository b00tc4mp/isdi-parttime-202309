const CSV = require('./CSV') //así se importa en node

// CSV.parseFromFile('./data/users.csv', (error, users) => {
//     if (error) {
//         console.error(error)
//         return
//     }

//     CSV.stringifyToFile('./data/users2.csv', users, error => {
//         if (error) {
//             console.log(error)
//             return
//         }
//         console.log('end')
//     })
// }) //llamo a la función

const csv = `id,name,email,password\r
69d4ph8zzj00,Patata Frita,patata@frita.com,000\r
3vxs04m50tk0,Lechu Guita,lechu@guita.com,111\r
5tw7oh7a0n80,Pasta Naga,pasta@naga.com,123`

const users = CSV.parse(csv)

console.log(users)

const csv2 = CSV.stringify(users)

console.log(csv2)