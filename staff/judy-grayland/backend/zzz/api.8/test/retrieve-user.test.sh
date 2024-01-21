#!/bin/bash

source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 3kmmn4f11xe0' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3kmmn4f11xe0

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 22
# < ETag: W/"16-EsstrSWjubxkB99nlYu8nRL6DKA"
# < Date: Sat, 13 Jan 2024 13:48:50 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"name":"Lechu Guita"}%    

CASE "fails on invalid user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 3wkmmn4f11xe0' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3wkmmn4f11xe0

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 13 Jan 2024 13:52:08 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"}% 