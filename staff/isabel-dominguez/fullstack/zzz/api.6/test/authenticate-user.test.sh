echo TEST "authenticate-user"

echo CASE "success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana.com", "password": "123123123" }' \
-v

# * processing: http://localhost:8000/users/auth
# *   Trying [::1]:8000...
# * Connected to localhost (::1) port 8000
# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 52
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 26
# < ETag: W/"1a-+M9XaATMJWy28YAuVWl+6Gi3loM"
# < Date: Sat, 06 Jan 2024 16:35:44 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# "6599810a2c6f1a3caa0ed9f3"* Connection #0 to host localhost left intact