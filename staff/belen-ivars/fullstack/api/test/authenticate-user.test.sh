source pepetest.sh

TEST "authenticate-user"

CASE "succes on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{"email": "tossi@lao.com", "password":"123123123"}' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 50

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 14
# < ETag: W/"e-rKGhnqXLLT06ybvMJIy9n4FCO/8"
# < Date: Tue, 02 Jan 2024 13:13:17 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
#
# "5a9y1ojhbec0"%  

CASE "error of wrong email"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{"email": "wrong-tossi@lao.com", "password":"123123123"}' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 56
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Tue, 02 Jan 2024 17:33:17 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 
# {"error":"Error","message":"user not found"} 

CASE "error of wrong password"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{"email": "wrong-tossi@lao.com", "password":"12312312"}' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 55

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Tue, 02 Jan 2024 17:43:55 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"