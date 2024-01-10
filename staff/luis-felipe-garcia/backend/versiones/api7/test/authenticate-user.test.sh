source pepetest.sh

TEST "authenticate-user"

CASE "success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana.com", "password": "123123123" }' \
-v




CASE "error on wrong email"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wrong-man@zana.com", "password": "123123123" }' \
-v




CASE "error on wrong password"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana.com", "password": "wrong-123123123" }' \
-v