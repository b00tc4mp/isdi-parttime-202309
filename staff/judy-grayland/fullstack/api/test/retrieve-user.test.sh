!/bin/bash

# source ./pepetest.sh

# TEST "retrieve-user"

# CASE "success on correct token"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWM0ZjM1ZWI4NGE0MjgzODUxNjhiYjMiLCJpYXQiOjE3MDgwMTQ2MjZ9.WzRWo0CMEm8ul4yLtWOhdqUJzTdmgB-zIodg-YO99xg' \
-v


# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWM0ZjM1ZWI4NGE0MjgzODUxNjhiYjMiLCJpYXQiOjE3MDgwMTQ2MjZ9.WzRWo0CMEm8ul4yLtWOhdqUJzTdmgB-zIodg-YO99xg

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 21
# < ETag: W/"15-4M1c3tcAVA09sx5RqPF0Ft4r1os"
# < Date: Thu, 15 Feb 2024 16:32:14 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5  

CASE "fails on corrupted token"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWNjZTk5NTAwYzVlNjA3NTQyYmE2Y2UiLCJpYXQiOjE3MDgwMTQ2MjZ9.WzRWo0CMEm8ul4yLtWOhdqUJzTdmgB-zIodg-YO99xg' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWNjZTk5NTAwYzVlNjA3NTQyYmE2Y2UiLCJpYXQiOjE3MDgwMTQ2MjZ9.WzRWo0CMEm8ul4yLtWOhdqUJzTdmgB-zIodg-YO99xg

# < HTTP/1.1 500 Internal Server Error
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-61ditfGzo3McKN+1rnEayxAQ8YU"
# < Date: Thu, 15 Feb 2024 16:38:29 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# * Connection #0 to host localhost left intact
# {"error":"TokenError","message":"invalid signature"}%    

CASE "fails on expired token"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWM0ZjM1ZWI4NGE0MjgzODUxNjhiYjMiLCJpYXQiOjE3MDgwMjAxMzQsImV4cCI6MTcwODAyMDEzNX0.8PU4Hrlug4ghtBz-KzRLVo1mTw2a4NryPrWJ-mazJOM' \
-v