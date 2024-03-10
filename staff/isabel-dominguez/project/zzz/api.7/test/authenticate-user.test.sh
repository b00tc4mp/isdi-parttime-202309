echo TEST "authenticate-user"

echo CASE "success on correct credentials"

curl "http://localhost:9000/users/auth" \
-H 'Content-Type: application/json' \
-d '{ "email": "isabelds22@hotmail.com", "password": "123123123" }' \
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
# > Content-Length: 62
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 174
# < ETag: W/"ae-vo+bycvPJStgmYoFvdbXSveChgw"
# < Date: Tue, 05 Mar 2024 17:22:18 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU3NGUyMDBmNGZjMjIwMDE1MjQyNmYiLCJpYXQiOjE3MDk2NTkzMzgsImV4cCI6MTcwOTY2MjkzOH0.90X3OQ3x4iGsIqrbjkncgP-KPfk_gy0cgQZp9ee_v8w"