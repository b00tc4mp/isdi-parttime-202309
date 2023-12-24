echo TEST "change-password-user"

echo CASE "password changed"

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./test/retrieve-user.test.sh

curl 'http://localhost:8000/users/password' \
-H 'Authorization: Bearer 5gbocg2tsfs0' \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "userId": "5gbocg2tsfs0",
  "password": "123123123",
  "newPassword": "234234234",
  "confirmNewPassword": "234234234"
}' \
-v

# > POST /users/password HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 5gbocg2tsfs0
# > Content-Type: application/json
# > Content-Length: 124

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 68
# < ETag: W/"44-OsCiB0/BosT+Gj4qqZw4iUfc+vE"
# < Date: Sun, 17 Dec 2023 17:12:56 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"message":"Password changed successfully.","userId":"5gbocg2tsfs0"}* 