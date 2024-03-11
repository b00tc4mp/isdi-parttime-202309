source pepetest.sh

TEST "register-User"

CASE "success on new user"

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Gon Zalo", "email": "gon@zalo.com", "password": "123123123" }' \
-v

# con el -v le pido que me enseñe la vuelta
# cen la cabecera -H le aviso que tipo de dato le voy a enviar
# ```sh


ERROR_CASE "fail on already existing user"
curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Hera Son", "email": "hera@son.com", "password": "123123123" }' \
-v

