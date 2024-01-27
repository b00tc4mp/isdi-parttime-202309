const CSV = require('./CSV')

// CSV.loadAsObject('./users.csv', (error, users) => {
//     if(error){
//         console.log(error)

//         return

//     }

//     console.log(users)
// }) 

CSV.loadAsObject('./posts.csv', (error, posts) => {
    if(error){
        console.error(error)

        return

    }

    CSV.saveFromObject('./posts2.csv', posts, error => {
        if (error){
            console.error(error)

            return
        }
        

        console.log('end')
    })
}) 