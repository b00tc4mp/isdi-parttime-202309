
#  curl es un cliente como el navegador. 
#  curl te permite llamar al servidor desde el terminal. configurando las llamadas, para hacerte la vida facil en las pruebas rapidas. 
#  User-Agent, ahi te pone el nombre de curl y su versión

source pepetest.sh

TEST "authenticate-user"

CASE "success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "alca@chofa.com", "password": "123123123" }' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 57


# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 14
# < ETag: W/"e-VFfJ6qvLsJGg4ctdsseAM2e5jDM"
# < Date: Sat, 16 Dec 2023 10:30:53 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# "5w9o7zyhewc0"%    

CASE "error or wrong email"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wrong-anadel@gmail.com", "password": "123123123" }
' \
-v

# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 63
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 16 Dec 2023 11:09:41 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"Error","message":"user not found"}%   

CASE "error or wrong password"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "anadel@gmail.com", "password": "wrong-123123123" }
' \
-v

# CASE error or wrong password
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > POST /users/auth HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 63
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 47
# < ETag: W/"2f-gSxgt/X3rXUFm8ouTih67ywXda0"
# < Date: Sat, 16 Dec 2023 11:30:57 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 

# {"error":"Error","message":"wrong credentials"}% 