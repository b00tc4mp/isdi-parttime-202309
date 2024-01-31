echo TEST "authenticate-user"

echo CASE "success on correct credentials"

curl "http://localhost:9000/users/auth" \
-H 'Content-Type: application/json' \
-d '{ "email": "o@livia.com", "password": "123123123" }' \
-v

# TEST authenticate-user
# CASE success on correct credentials
# * processing: http://localhost:9000/users/auth
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > POST /users/auth HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 49
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 26
# < ETag: W/"1a-Yoa3K8B38WGMlSCINQSmB2oeS9Q"
# < Date: Sun, 21 Jan 2024 17:01:12 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# "65ad491c939601e86358d406"* Connection #0 to host localhost left intact
