source ./pepetest.sh #ARCHIVO EXPORTADO DE CONFIGURACIÓN DE COLOR-TEXTO PARA LOS TEST


echo -e "\n${backgroundWhite}${black}TEST ${tomato}authenticate-user${reset}\n"

echo -e "${green}CASE success on correct credentials${reset}"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "higo@chumbo.com", "password": "123123123" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 55

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 14
# < ETag: W/"e-OivImuOxc9V4mjPhIuVd09irwTg"
# < Date: Sat, 16 Dec 2023 12:03:49 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# "1b43kkcm4oxs"

echo -e "\n${tomato}CASE error on wrong email${reset}"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wrong-higo@chumbo.com", "password": "123123123" }' \
-v