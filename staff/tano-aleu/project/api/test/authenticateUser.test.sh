source pepetest.sh

TEST "authenticate-User"

CASE "success on correct credentials"

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{"email": "hera@son.com", "password": "123123123" }' \
-v

# con el -v le pido que me enseñe la vuelta
# cen la cabecera -H le aviso que tipo de dato le voy a enviar
# ```sh


ERROR_CASE "error on wrong email"

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{"email": "her@son.com", "password": "123123123" }' \
-v


ERROR_CASE "error on wrong password"

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "hera@son.com", "password": "wrong-123123123" }' \
-v