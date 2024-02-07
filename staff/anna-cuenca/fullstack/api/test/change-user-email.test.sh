source pepetest.sh

TEST "change-user-email"

CASE "success on correct data"

curl 'http://localhost:9000/users/change-email' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMzYjEzNzU1MTVjMDEyNDVmOWU1ZjUiLCJpYXQiOjE3MDczMjYyMzIsImV4cCI6MTcwNzMyOTgzMn0.k4y4sumuopIxtWOb-YFVzmExMHxm4i9--3FW7TsV9jE' \
-H 'Content-Type: application/json' \
-d '{ "newEmail": "ma@carra.com", "newEmailConfirm": "ma@carra.com", "password": "456456456"}' \
-X PATCH \
-v

