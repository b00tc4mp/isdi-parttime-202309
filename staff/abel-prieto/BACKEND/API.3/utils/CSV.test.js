const CSV = require("./CSV")

// CSV.loadAsObject("./users.csv", (error, users) => {
//     if (error) {
//         console.error(error)

//         return
//     }

//     console.log(users)
// })

// CSV.loadAsObject("./data/users.csv", (error, users) => {
//     if (error) {
//         console.error(error)

//         return
//     }

//     CSV.saveFromObject("./data/users2.csv", users, error => {
//         if (error) {
//             console.error(error)

//             return
//         }

//         console.log('end')
//     })
// })

const csv = `id,name,email,password\r
3ntpfsql59c0,Za Payo,za@payo.com,123123123\r
2b4bwcqo9ps0,Abel Prieto,abelpriem94@hotmail.com,1234\r
2rbzvx8lwxs0,Peter Pan,peter@pan.com,123123123\r
43htuuxgyl20,Wendy Darling,wendy@darling.com,123123123`

const users = CSV.parse(csv)
console.log(users)

const csv2 = CSV.sstringify(users)
console.log(csv2)
