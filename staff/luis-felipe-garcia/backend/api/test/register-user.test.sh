source pepetest.sh

TEST "register-user"

CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{"name": "Tom Ate 2", "email": "tom@ate2.com", "password": "123123123" }' \
-v



CASE "fail on already existing user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Pepito Grillo", "email": "pepito@grillo.com", "password": "123123123" }' \
-v