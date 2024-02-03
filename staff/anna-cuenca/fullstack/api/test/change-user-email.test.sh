source pepetest.sh

TEST "change-user-email"

CASE "success on correct data"

curl 'http://localhost:9000/users/65abeea7ccb29864b82b9dc4/email' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiZWVhN2NjYjI5ODY0YjgyYjlkYzQiLCJpYXQiOjE3MDY4NTgzOTYsImV4cCI6MTcwNjg2MTk5Nn0.Q3Weafbu65ttI7ESlC-tQs9ZDb3tNws3HVPRP7KM3Ic' \
-H 'Content-Type: application/json' \
-d '{ "newEmail": "patata@frita.com", "repeatNewEmail": "patata@frita.com", "password": "123123123"}' \
-X PATCH \
-v

