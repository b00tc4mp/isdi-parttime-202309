source pepetest.sh

TEST "authenticate-user"

CASE "success on correct credentials"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana.com", "password": "123123123" }' \
-v

\n\nCASE success on correct credentials
# * processing: http://localhost:8000/users/auth
# *   Trying [::1]:8000...     
# * Connected to localhost (::1) port 8000
# > POST /users/auth HTTP/1.1  
# > Host: localhost:8000       
# > User-Agent: curl/8.2.1     
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 52
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express      
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 26
# < ETag: W/"1a-NgNH/ZjDox/6smdcXgxNL8d3TYY"
# < Date: Wed, 10 Jan 2024 20:12:08 GMT
# < Connection: keep-alive     
# < Keep-Alive: timeout=5      
# <  

CASE error on wrong email

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wrong-man@zana.com", "password": "123123123" }' \
-v

# > POST /users/auth HTTP/1.1  
# > Host: localhost:8000       
# > User-Agent: curl/8.2.1     
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 58
# >
# < HTTP/1.1 404 Not Found     
# < X-Powered-By: Express      
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Wed, 10 Jan 2024 20:12:08 GMT
# < Connection: keep-alive     
# < Keep-Alive: timeout=5      
# <
# {"error":"NotFoundError","message":"user not found"}* Connection #0 to host localhost left intact

CASE "error on wrong password"

curl 'http://localhost:8000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@zana.com", "password": "wrong-123123123" }' \
-v

# > POST /users/auth HTTP/1.1  
# > Host: localhost:8000       
# > User-Agent: curl/8.2.1     
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-3mBc0WtcQO2Ze4UXSt4AJH7BRe8"
# < Date: Wed, 10 Jan 2024 20:12:08 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"error":"CredentialsError","message":"wrong password"}* Connection #0 to host localhost left intact