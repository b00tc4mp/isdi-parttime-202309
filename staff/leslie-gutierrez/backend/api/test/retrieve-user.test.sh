SOURCE pepetesh.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-v

# * Connected to localhost (::1) port 8000
# > GET /users HTTP/1.1        
# > Host: localhost:8000       
# > User-Agent: curl/8.2.1     
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express      
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 18
# < ETag: W/"12-6JdiK7T/Ys1w1lyyJuslcQ6AI6o"
# < Date: Sat, 23 Dec 2023 13:59:01 GMT
# < Connection: keep-alive     
# < Keep-Alive: timeout=5      
# <
# {"name":"Pe Pino"}* Connection 

CASE "fails on non-existing user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 5945v51dd8i0' \
-v
