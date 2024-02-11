echo TEST "register-user"

echo CASE "success on new user"

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v


