source pepetest.sh 

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 9nbvjt5wugo' \
-v


# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wugo
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 520
# < ETag: W/"208-8i+/mhfV/W3emIri3FtLYeKiDQE"

# < Connection: keep-alive
# < Keep-Alive: timeout=5
# [{"id":"4op7rg7el9y0","author":{"id":"6ttz1tptn2c0","name":"Le Chuga"},"image":"https://media.istockphoto.com/id/181072765/es/foto/lechuga-aislado.jpg?s=612x612&w=0&k=20&c=7spdLdTK_iyTUdpdp6cjdHkDE9dCkahoTtnOvQYY8mE=","text":"what a fresh day","likes":["9nbvjt5wugo"],"liked":true,"fav":false},{"id":"2dzjpxbi8la8","author":{"id":"9nbvjt5wugo","name":"Zana Horia"},"image":"https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg","text":"Hello, World!","likes":[],"liked":false,"fav":false}]  


CASE "success on non.existing user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 9nbvjt5wug' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wug
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 23 Dec 2023 11:06:05 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"error":"Error","message":"user not found"}%  