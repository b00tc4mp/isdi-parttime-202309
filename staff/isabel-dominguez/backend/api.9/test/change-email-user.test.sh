echo TEST "change-email-user"

echo CASE "email changed"

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./test/retrieve-user.test.sh

curl 'http://localhost:8000/users/email' \
-H 'Authorization: Bearer 4an7ym43zji0' \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "userId": "4an7ym43zji0",
  "email": "pepito@grillo.com",
  "newEmail": "pep@grill.com",
  "confirmNewEmail": "pep@grill.com"
}' \
-v

# > POST /users/email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 4an7ym43zji0
# > Content-Type: application/json
# > Content-Length: 131

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 65
# < ETag: W/"41-2eZK8Vh4bIHxrSfUrFt4MqaC7wg"
# < Date: Sun, 17 Dec 2023 17:11:41 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"message":"Email changed successfully.","userId":"4an7ym43zji0"}* 