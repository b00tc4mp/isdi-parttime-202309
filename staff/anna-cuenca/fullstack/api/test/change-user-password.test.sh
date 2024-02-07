source pepetest.sh

TEST "change-user-password"

CASE "success on correct data"

curl 'http://localhost:9000/users/65b93b869f8dd89eeaaf9c28/password' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMzYjEzNzU1MTVjMDEyNDVmOWU1ZjUiLCJpYXQiOjE3MDczMjYyMzIsImV4cCI6MTcwNzMyOTgzMn0.k4y4sumuopIxtWOb-YFVzmExMHxm4i9--3FW7TsV9jE' \
-H 'Content-Type: application/json' \
-d '{ "password": "111222333", "newPassword": "123123123", "repeatNewPassword": "123123123"}' \
-X PATCH \
-v
