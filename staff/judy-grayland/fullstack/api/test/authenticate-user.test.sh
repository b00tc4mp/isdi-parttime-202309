source pepetest.sh

TEST "authenticate-user"

CASE "success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "me@lonchik.com", "password": "aaa" }' \
-v


# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 51

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 14
# < ETag: W/"e-IcokfD9ccH1aOltd2OQQT8jiH20"
# < Date: Sat, 13 Jan 2024 12:29:29 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
#
# "3kmmn4f11xe0"%

echo CASE error on wrong email

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "lechuwrong@guita", "password": "123123123" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 56

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 13 Jan 2024 13:21:30 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"}%    

echo CASE error on wrong password

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "lechu@guita", "password": "wrong123123123" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 56

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 47
# < ETag: W/"2f-gSxgt/X3rXUFm8ouTih67ywXda0"
# < Date: Sat, 13 Jan 2024 13:24:03 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"wrong credentials"}% 