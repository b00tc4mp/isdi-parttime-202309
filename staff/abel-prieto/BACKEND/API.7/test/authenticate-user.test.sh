# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json
# El -d indica al servidor el tipo de dato que está enviando el cliente
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor

source pepetest.sh

TEST "AUTHENTICATE USER"

CASE "Success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "nosoy@batman.com", "password": "1234" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 51

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: text/html; charset=utf-8
# < Content-Length: 12
# < ETag: W/"c-XA7RwwEP+Af9sAvszmyKlbyTEt0"
# < Date: Thu, 14 Dec 2023 15:25:40 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
#
# 24dlukpa1skg* 

CASE "Error on wrongs credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wrong-nosoy@batman.com", "password": "1234" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 57
# >
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Thu, 14 Dec 2023 15:37:35 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"error":"Error","message":"user not found"}* 

