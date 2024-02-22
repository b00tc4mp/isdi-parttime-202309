source pepetest.sh

TEST 'register-user'

CASE 'success on new user'

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{"name": "Filo Mena", "email": "filo@mena.com", "password": "123123123"}' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Wed, 21 Feb 2024 20:02:50 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

CASE "fail on already existing user"

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Darina", "email": "man@darina.com", "password": "123123123"
}' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 76
# > 
# < HTTP/1.1 409 Conflict
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 58
# < ETag: W/"3a-BkTRoMg3lQUZlpFvLO97n1a0SLg"
# < Date: Wed, 21 Feb 2024 20:02:50 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5