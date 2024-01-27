source ./test/pepetest.sh

echo -e "\n${backgroundWhite}${black}TEST ${tomato}retrieve-posts${reset}\n"

echo -e "\n${green}CASE success on correct user id${reset}\n"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 1b43kkcm4oxs' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 1b43kkcm4oxs
 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Methods: *
# < Access-Control-Allow-Headers: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 978
# < ETag: W/"3d2-JLPOAnvhfyxZMUaM/a8fYnvpeZU"
# < Date: Sat, 23 Dec 2023 11:46:12 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 
# {"id":"7e5klaogm6o0","author":{"id":"6ttz1tptn2c0","name":"Le Chuga"},"image":"https://media.istockphoto.com/id/181072765/es/foto/lechuga-aislado.jpg?s=612x612&w=0&k=20&c=7spdLdTK_iyTUdpdp6cjdHkDE9dCkahoTtnOvQYY8mE=","text":"what a fresh day","likes":[],"liked":false,"fav":false},{"id":"2oq2m0vjmi60","author":{"id":"6ttz1tptn2c0","name":"Le Chuga"},"image":"https://st3.depositphotos.com/2444145/18096/v/450/depositphotos_180966178-stock-illustration-cartoon-cabbage-character.jpg","text":"beautiful and fresh","likes":[],"liked":false,"fav":false},{"id":"uz9z637he2o","author":{"id":"1b43kkcm4oxs","name":"Higo Chumbo"},"image":"https://i1.sndcdn.com/artworks-000098556161-wor8n4-t500x500.jpg","text":"Estoy que pincho!!","likes":[],"liked":false,"fav":false},{"id":"1b6f40mwu9c0","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://img.freepik.com/vector-premium/icono-dibujo-pepino_202271-1060.jpg","text":" Pepinillo!!","likes":[],"liked":false,"fav":false}


echo -e "\n${tomato}CASE fails on non-existing user id${reset}\n"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer wrong-1b43kkcm4oxs' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer wrong-1b43kkcm4oxs

# < HTTP/1.1 400 Unauthorized
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Methods: *
# < Access-Control-Allow-Headers: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 23 Dec 2023 11:46:12 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"}