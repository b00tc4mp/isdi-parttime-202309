source pepetest.sh

TEST "register-user"

CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{"name":"Tossi Lao", "email": "tossi@lao.com", "password":"123123123"}' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 70

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Tue, 12 Dec 2023 20:30:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

CASE "fail on already exissting user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{"name":"Tossi Lao", "email": "tossi@lao.com", "password":"123123123"}' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 70
 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 58
# < ETag: W/"3a-BkTRoMg3lQUZlpFvLO97n1a0SLg"
# < Date: Tue, 02 Jan 2024 17:53:27 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"DuplicityError","message":"user already exists"