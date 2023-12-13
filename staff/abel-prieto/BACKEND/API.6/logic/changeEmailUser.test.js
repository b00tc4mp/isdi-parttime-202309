const changeEmailUser = require("./changeEmailUser");

try {
    changeEmailUser("abelpriem94@hotmail.com", "helloworld@gmail.com", "1234", error => {
        if (error) {
            console.log(error)

            return
        }

        console.log("email succesfully changed!")
    })
} catch (error) {
    console.log(error)
}