source pepetest.sh

TEST "register-user"

CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# > POST /users HTTP/1.1
# > Host: localhost:8000  
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72    
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express 
# < Date: Thu, 21 Dec 2023 22:48:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5 
# < Content-Length: 0 

CASE "fail on already existing user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v