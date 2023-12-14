# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json
# El -d indica al servidor el tipo de dato que está enviando el cliente
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor

source pepetest.sh

TEST "CHANGE EMAIL USER"

CASE "Email change succesfully"

curl 'http://localhost:8000/users/email' \
-H 'Content-Type: application/json' \
-d '{ "email": "nosoy@batman.com", "newEmail": "sisoy@batman.com", "password": "1234" }' \
-v

# > POST /users/email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 83
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Date: Thu, 14 Dec 2023 17:47:42 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0


CASE "Error with change on same email"

curl 'http://localhost:8000/users/email' \
-H 'Content-Type: application/json' \
-d '{ "email": "nosoy@batman.com", "newEmail": "sisoy@batman.com", "password": "1234" }' \
-v

# > POST /users/email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 83
# >
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Thu, 14 Dec 2023 17:48:20 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"error":"Error","message":"user not found"}