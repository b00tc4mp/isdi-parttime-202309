const toggleLikePost = require ('./toggleLikePost')


// CASE Succsess LIKE
try {
    toggleLikePost( "1g6al6ee05pc", "40ga0cl8bd00", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleLikePost.test.js
// post like toggled
// {
//     "id": "40ga0cl8bd00",
//     "author": "1g6al6ee05pc",
//     "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD",
//     "text": "Pepino from agropinente",
//     "likes": [
//         "1g6al6ee05pc"
//     ]
// },


//CASE SUCCESS UNLIKE

try {
    toggleLikePost( "1g6al6ee05pc", "40ga0cl8bd00", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}


// {
//     "id": "40ga0cl8bd00",
//     "author": "1g6al6ee05pc",
//     "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD",
//     "text": "Pepino from agropinente",
//     "likes": []
// },
// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleLikePost.test.js
// post like toggled



//CASE POST DO NOT EXIST

try {
    toggleLikePost( "1g6al6ee05pc", "postdonotexist", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}

// NotFoundError: post not found
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/toggleLikePost.js:41:26





//CASE USER DO NOT EXIST

try {
    toggleLikePost( "USERDONOTEXIST", "40ga0cl8bd00", error => {
        if (error){
            console.error(error)
            return
        }

        console.log('post like toggled')
    })
    
} catch (error) {
    console.error(error)
    
}

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/toggleLikePost.test.js
// NotFoundError: user not found
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/toggleLikePost.js:20:22