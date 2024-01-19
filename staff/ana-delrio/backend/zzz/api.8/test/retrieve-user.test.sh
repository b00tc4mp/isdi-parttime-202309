source pepetest.sh 

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 9nbvjt5wugo' \
-v


# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wugo
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 21
# < ETag: W/"15-xy0TXAXoS078xFl1FmJMgE8OF7Q"
# < Date: Sat, 16 Dec 2023 16:35:57 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"name":"Zana Horia"}%     


CASE "success on non.existing user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 9nbvjt5wug' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wug
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 16 Dec 2023 16:37:20 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"error":"Error","message":"user not found"}% 