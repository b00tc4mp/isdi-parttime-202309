const changeUserPassword = require('./changeUserPassword')

try {

    changeUserPassword('amhkljhnhc4', '356456456', '356456456', '956456456',error => {
        if(error) {
            console.error(error)
            return
        }

        console.log('password changed')

    })
    
} catch (error) {
    console.error(error.message)
    
}


//CASE Success

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/changeUserPassword.test.js
// password changed
// [
//     {
//         "id": "amhkljhnhc4",
//         "name": "Cala Bacin",
//         "email": "FETCHcala@bacin.com",
//         "password": "456456456",
//         "favs": []
//     },

// CASE User not NotFoundError

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/changeUserPassword.test.js
// NotFoundError: user not found
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/changeUserPassword.js:22:22
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/utils/JSON.js:12:9
//     at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)



// CASE Passwords do not match

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/changeUserPassword.test.js
// ContentError: Passwords do not match
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/changeUserPassword.js:32:22
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/utils/JSON.js:12:9
//     at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)


// CASE wrong credentials

// (base) lf@MacBook-Pro-de-Luis api % node ./logic/changeUserPassword.test.js
// CredentialsError: wrong credentials
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/logic/changeUserPassword.js:27:22
//     at /Users/lf/workspace/isdi-parttime-202309/staff/luis-felipe-garcia/fullstack/api/utils/JSON.js:12:9
//     at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)