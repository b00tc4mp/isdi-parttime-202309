source ./pepetest.sh

echo -e "\n${backgroundWhite}${black}TEST ${tomato}retrieve-user${reset}\n"

echo -e "\n${green}CASE success on correct user id${reset}\n"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 65a7bd5bac10d94819cc652e' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 65a7bd5bac10d94819cc652e

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 22
# < ETag: W/"16-O25BQoTlfZ97DLGx6C+7r7cvl5Q"
# < Date: Sun, 17 Dec 2023 17:30:54 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 
# {"name":"Higo Chumbo"}


echo -e "\n${tomato}CASE fails on non-existing user id${reset}\n"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer wrong-65a7bd5bac10d94819cc652e' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer wrong-65a7bd5bac10d94819cc652e

# < HTTP/1.1 401 Unauthorized
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sun, 17 Dec 2023 17:34:53 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"}