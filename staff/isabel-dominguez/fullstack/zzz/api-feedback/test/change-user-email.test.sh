echo TEST "change-user-email"

echo CASE "Email change succesfully"

curl 'http://localhost:9000/users/email' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana", "newEmail": "man@zanita.com", "confirmNewEmail": "man@zanita.com", "password": "123123123" }' \
-v
