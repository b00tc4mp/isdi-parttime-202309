source ./test/pepetest.sh

echo -e "\n${backgroundWhite}${black}TEST ${tomato}create-post${reset}\n"

echo -e "\n${green}CASE success on correct data${reset}\n"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 1b43kkcm4oxs' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://i1.sndcdn.com/artworks-000098556161-wor8n4-t500x500.jpg", "text": "Estoy que pincho!!" }' \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 1b43kkcm4oxs
# > Content-Type: application/json
# > Content-Length: 108
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Mon, 18 Dec 2023 12:42:29 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

