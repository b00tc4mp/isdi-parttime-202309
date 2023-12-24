echo TEST "retrieve-user"

echo CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 5gbocg2tsfs0' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 5gbocg2tsfs0

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 19
# < ETag: W/"13-6WtBlAj7hEi29Q9uRrUVVn0dcFk"
# < Date: Sat, 16 Dec 2023 19:30:49 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"name":"Man Zana"}*

echo CASE "success on incorrect user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 5gbocg2tsfs2' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 5gbocg2tsfs2

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 16 Dec 2023 19:32:07 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"}*