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
# > Content-Length: 51
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 151
# < ETag: W/"97-1yc/5jZ+CllpbQ/za5rpfs36vzU"
# < Date: Fri, 02 Feb 2024 17:29:38 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFkNjk1OWM3NWMwMzFhZDRhNjg2ODciLCJpYXQiOjE3MDY4OTQ5Nzh9.g5F1rzjOUPu-u7lQZQsotFcJ8_kSQaQ9H2O7VP22EEc"* Connection #0 to host localhost left intact
