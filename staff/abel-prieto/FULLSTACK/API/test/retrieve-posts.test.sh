# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json
# El -d indica al servidor el tipo de dato que está enviando el cliente
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor

# source pepetest.sh

blue='\033[0;34m'
green='\033[0;32m'
tomato='\033[1;31m'

reset='\033[0m'

echo -e "${blue}TEST RETRIEVE POSTS${reset}\n"

echo -e "${green}CASE Success with retrieve posts${reset}\n"

curl 'http://localhost:8000/newpost' \
-H 'Authorization: Bearer 1g958dd4qk0w' \
-v

# > GET /newposts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 74

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Tue, 12 Dec 2023 20:30:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

# TODO

# echo -e "${tomato}CASE Error with wrong user id${reset}\n"

# curl 'http://localhost:8000/newpost' \
# -H 'Authorization: Bearer 6g958dd4qk0w' \
# -v

# > GET /newpost HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 74
# >
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 49
# < ETag: W/"31-9YH7vKZZOanka1kAQTVWdLRn9j0"
# < Date: Thu, 14 Dec 2023 15:41:59 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"error":"Error","message":"user not found"}