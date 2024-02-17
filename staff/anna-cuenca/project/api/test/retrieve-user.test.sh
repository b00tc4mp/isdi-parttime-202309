source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQwZjA5MjkwOGE5ZTcwZTk3YTI5ZDYiLCJpYXQiOjE3MDgyMDE0NzIsImV4cCI6MTcwODIwNTA3Mn0.EsOUWjtZC2eeGU0OhjD1JWMB0ayg4T5sVJMV53dPS0s' \
-v