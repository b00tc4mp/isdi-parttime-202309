source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 659b348c696ad77021d9e2f8' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 61t6qhvtsos0
 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 20
# < ETag: W/"14-tFbXBDPH2ZWoZgr7q9FWeHBwFV0"
# < Date: Tue, 02 Jan 2024 18:03:36 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"name":"Tossi Lao"}

CASE "success on non-existing user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 5a9y1ojhbec0' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 5a9y1ojhbec0

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Tue, 02 Jan 2024 18:05:20 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 
# {"error":"Error","message":"user not found"}