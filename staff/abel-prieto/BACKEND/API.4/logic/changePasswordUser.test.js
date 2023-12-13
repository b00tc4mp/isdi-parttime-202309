const changePasswordUser = require("./changePasswordUser")

try {
    changePasswordUser("abelpriem94@gmail.com", "1234", "hello", error => {
        if (error) {
            console.log(error)

            return
        }

        console.log("password succesfully changed!")
    })
} catch (error) {
    console.log(error)
}