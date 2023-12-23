source pepetest.sh

TEST "authenticate-user"

CASE "success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana.com", "password": "123123123" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json      
# > Content-Length: 52  

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 14
# < ETag: W/"e-les1/h1Wxpk5Oh/ZH5QlMkuyIpo"
# < Date: Sat, 23 Dec 2023 12:25:09 GMT 
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# "4di130e14fa0"

CASE error on wrong email

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wrong-man@zana.com", "password": "123123123" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json      
# > Content-Length: 58
# >
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 23 Dec 2023 12:30:35 GMT 
# < Connection: keep-alive
# < Keep-Alive: timeout=5
