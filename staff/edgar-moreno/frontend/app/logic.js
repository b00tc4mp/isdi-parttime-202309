//BUSINESS LOGIC

function registerUser(name, email, password) {

    var userExists = userExistsByEmail(email)

    if (userExists)
        return false
    //Ahora retorna falso por el modelo de separacion de datos y logica. Nos devuelve FALSE ya que 
    // en la funcion de registerform ya controlamos si existe o no el userRegistered, si da falso , no existe por tanto salta el mensaje
    createUser (name, email, password)
    

    return true

}
//llamaremos a la logica para autentificar el usuario, usando los datos de DATA
function authenticateUser(email,password){

}
//llamaremos a la logica para recibir los datos del usuario, llamandolos desde DATA
function retrieveUser(email){

}
