source ./pepetest.sh

echo -e "\n${backgroundWhite}${black}TEST ${tomato}register-user ${reset}\n"

echo -e "\n${green}CASE success on new user${reset}\n"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Pis Tacho", "email": "pis@tacho.com", "password": "123123123" }' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 78
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Fri, 15 Dec 2023 12:41:59 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

echo -e "\n${tomato}CASE fail on already existing user ${reset}\n"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Pis Tacho", "email": "pis@tacho.com", "password": "123123123" }' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 76

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 48
# < ETag: W/"30-WEfgD01TnrxWKPlOW/tfHY9rPys"
# < Date: Sun, 17 Dec 2023 16:25:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user already exist"}