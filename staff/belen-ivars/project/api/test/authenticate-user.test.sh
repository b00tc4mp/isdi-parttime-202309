source pepetest.sh

TEST 'authenticate-user'

CASE 'success on correct credentials'

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{"email": "filo@mena.com", "password": "123123123"}' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 51
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 174
# < ETag: W/"ae-xoMjJkMAcoU50Y0NdIBS6tqorMI"
# < Date: Thu, 22 Feb 2024 17:37:25 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQ2NTZlYWE5MmU4NWM5ZjlmYTZkNzEiLCJpYXQiOjE3MDg2MjM0NDUsImV4cCI6MTcwODYyNzA0NX0.k6C_Yv259KFl4Mx0QyPcuuW3FfwrM6scbbJ_VxLk65s"

CASE "fail on wrong email"

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man2@darina.com", "password": "123123123"
}' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 77
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Thu, 22 Feb 2024 17:37:25 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user not found"}

CASE "fail on wrong password"

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "man@darina.com", "password": "123123124"
}' \
-v

# > POST /users/auth HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 54
# > 
# < HTTP/1.1 401 Unauthorized
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-3mBc0WtcQO2Ze4UXSt4AJH7BRe8"
# < Date: Thu, 22 Feb 2024 17:49:59 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"CredentialsError","message":"wrong password"}%  