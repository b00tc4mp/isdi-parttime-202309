echo TEST "register-user"

echo CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# * processing: http://localhost:8000/users
# *   Trying [::1]:8000...
# * Connected to localhost (::1) port 8000
# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Sat, 06 Jan 2024 16:34:18 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
