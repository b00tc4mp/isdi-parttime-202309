
source pepetest.sh

TEST "register-user"

CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Beren Jena", "email": "beren@jena.com", "password": "123123123" }' \
-v

# > POST /register HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Tue, 12 Dec 2023 20:30:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

CASE "fail on already existing user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 49
# < ETag: W/"31-9YH7vKZZOanka1kAQTVWdLRn9j0"
# < Date: Sat, 13 Jan 2024 13:28:22 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user already exists"}%    