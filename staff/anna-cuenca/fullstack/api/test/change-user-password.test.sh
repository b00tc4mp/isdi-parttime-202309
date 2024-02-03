source pepetest.sh

TEST "change-user-password"

CASE "success on correct data"

curl 'http://localhost:9000/users/65b93b869f8dd89eeaaf9c28/password' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWI5M2I4NjlmOGRkODllZWFhZjljMjgiLCJpYXQiOjE3MDY4NTQ1NDcsImV4cCI6MTcwNjg1ODE0N30.eWwMTRXCJaCfxq7HxlQlx8ycArLZhB8UKGO9Z6AOo_4' \
-H 'Content-Type: application/json' \
-d '{ "password": "111222333", "newPassword": "123123123", "repeatNewPassword": "123123123"}' \
-X PATCH \
-v
