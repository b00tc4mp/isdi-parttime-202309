source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 6584656975fc0b52c39022e1' \
-v

# CASE success on correct user id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 6584656975fc0b52c39022e1
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 20
# < ETag: W/"14-lfiljT8Up+dB/XSLlapv4Dn9j8Q"
# < Date: Fri, 22 Dec 2023 20:41:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5




CASE "fails on non-existing user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 6585656975fc0b52c39022e1' \
-v

# CASE fails on non-existing user id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 6585656975fc0b52c39022e1
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Fri, 22 Dec 2023 20:41:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user not found"}%     