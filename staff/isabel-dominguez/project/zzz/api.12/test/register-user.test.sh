echo TEST "register-user"

echo CASE "success on new user"

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# TEST register-user
# CASE success on new user
# * processing: http://localhost:9000/users
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > POST /users HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Tue, 05 Mar 2024 17:29:26 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0