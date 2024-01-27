const CSV = require('./CSV')

CSV.parseFromFile('./data/users.csv', (error, users) => {
    if(error){
        console.error(error)

        return

    }

    CSV.stringifyToFile('./data/users2.csv', users, error => {
        if (error){
            console.error(error)

            return
        }
        

        console.log('end')
    })
}) 

// const csv = `id,name,email,password
// 5ubuymm4k700,Cala Bacin,cala@bacin.com,123123123
// 6ediwmlcy4o0,Zana Horia,zan@horia.com,123123123`

// const users = CSV.parse(csv)
// console.log(users) 


// const csv2 = CSV.stringify(users)
// console.log(csv2)