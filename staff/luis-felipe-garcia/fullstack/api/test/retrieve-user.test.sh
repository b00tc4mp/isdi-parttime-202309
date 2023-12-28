source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer amhkljhnhc4' \
-v

# CASE success on correct user id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 18
# < ETag: W/"12-DdE+6I8x1ckpaz3Li2st39GaaGg"
# < Date: Tue, 19 Dec 2023 18:39:29 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"name":"Tom Ate"}




CASE "fails on non-existing user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 7hyl6aor5999' \
-v

# CASE fails on non-existing user id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 7hyl6aor5999
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Tue, 19 Dec 2023 18:39:29 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5