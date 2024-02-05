echo TEST "change-user-password"

echo CASE "Password change succesfully"

curl 'http://localhost:9000/users/password' \
-H 'Content-Type: application/json' \
-d '{ "password": "123123123", "newPassword": "234234234", "confirmNewPassword": "234234234" }' \
-v
