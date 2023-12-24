echo TEST "register-user"

echo CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./index.test.sh

# > POST /register HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Sat, 16 Dec 2023 11:52:05 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0


echo CASE "fail on already existing user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 49
# < ETag: W/"31-9YH7vKZZOanka1kAQTVWdLRn9j0"
# < Date: Sat, 16 Dec 2023 19:18:27 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user already exists"}*