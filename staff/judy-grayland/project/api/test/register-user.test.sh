TEST 'register-user'

CASE 'passes for new user registered'

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Ken School", "email": "ken@school.com", "password": "123456789" }' \
-v

# POST /users HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 80
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Tue, 27 Feb 2024 16:54:06 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

CASE 'fails on already existing user'

curl 'http://localhost:9000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Willy Wonka School", "email": "willywonka@school.com", "password": "123456789" }' \
-v