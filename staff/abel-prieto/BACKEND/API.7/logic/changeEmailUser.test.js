const changeEmailUser = require("./changeEmailUser");

try {
    changeEmailUser("nosoy@batman.com", "sisoy@batman.com", "1234", error => {
        if (error) {
            console.log(error)

            return
        }

        console.log("email succesfully changed!")
    })
} catch (error) {
    console.log(error)
}