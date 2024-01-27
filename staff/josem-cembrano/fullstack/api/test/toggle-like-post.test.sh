source ./pepetest.sh #ARCHIVO EXPORTADO DE CONFIGURACIÓN DE COLOR-TEXTO PARA LOS TEST


echo -e "\n${backgroundWhite}${black}TEST ${tomato}toggle-like-post${reset}\n"

echo -e "${green}CASE success on correct data${reset}"

curl 'http://localhost:8000/posts/65acffdb7e9f6dc641a72c6c/likes' \
-H 'Authorization: Bearer 65a7bcdaff739420cdb3f9a1' \
-X  PATCH \
-v


# > PATCH /posts/70j3gtp5k5s0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 1b43kkcm4oxs

# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Content-Security-Policy: default-src 'none'
# < X-Content-Type-Options: nosniff
# < Content-Type: text/html; charset=utf-8
# < Content-Length: 165
# < Date: Tue, 19 Dec 2023 12:49:49 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5