# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json
# El -d indica al servidor el tipo de dato que está enviando el cliente
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor

# source pepetest.sh

blue='\033[0;34m'
green='\033[0;32m'
tomato='\033[1;31m'

reset='\033[0m'

echo -e "${blue}TEST RETRIEVE FAVS${reset}\n"

echo -e "${green}CASE Success with retrieve favs${reset}\n"

curl 'http://localhost:8000/users/favs' \
-H 'Authorization: Bearer 2b4bwcqo9ps0' \
-v

# > GET /users/favs HTTP/1.1
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

# [{"id":"1knxmeh16rs0","author":{"email":"peter@pan.com","id":"2rbzvx8lwxs0","name":"Peter Pan"},"image":"https://filasiete.com/wp-content/uploads/2020/05/peterpan.jpg","text":"hola!!!","likes":[],"liked":false,"fav":false},{"id":"6180xnit6ks","author":{"email":"wendy@darling.com","id":"43htuuxgyl20","name":"Wendy Darling"},"image":"https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Wendy_Darling.jpeg/revision/latest?cb=20190312151612","text":"my name is Wendy!","likes":[],"liked":false,"fav":false},{"id":"2ytu1zjsl2u0","author":{"email":"soy@batman.com","id":"1g958dd4qk0w","name":"Bruce Wayne"},"image":"https://elcorreoweb.es/documents/10157/0/image_content_18563891_20161222114201.jpg","text":"soy Batman!","likes":[],"liked":false,"fav":false}]* Connection #0 to host localhost left intact

echo -e "${tomato}CASE Error with wrong user id${reset}\n"

curl 'http://localhost:8000/users/favs' \
-H 'Authorization: Bearer 2b4bwcqo9ps0' \
-v

# > GET /users/favs HTTP/1.1
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