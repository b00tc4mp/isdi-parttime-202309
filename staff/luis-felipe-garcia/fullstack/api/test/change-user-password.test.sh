source pepetest.sh

TEST "change-password"

CASE "success"

curl 'http://localhost:8000/users/change-password' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "newPassword": "999999999", "newPasswordConfirm": "999999999", "password": "123123123" }' \
-X PATCH \
-v

# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-password HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 90
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Wed, 27 Dec 2023 05:49:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact


CASE "wrong password confirm"

curl 'http://localhost:8000/users/change-password' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "newPassword": "777777777", "newPasswordConfirm": "WRONGPASS", "password": "999999999" }' \
-X PATCH \
-v


# CASE wrong password confirm
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-password HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 90
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 59
# < ETag: W/"3b-DhlHRMJM+JveN/1VbT9U+jS/Gls"
# < Date: Wed, 27 Dec 2023 05:49:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"ContentError","message":"Passwords do not match"}


CASE "wrong password"

curl 'http://localhost:8000/users/change-password' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "newPassword": "777777777", "newPasswordConfirm": "777777777", "password": "WRONGPASS" }' \
-X PATCH \
-v


# CASE wrong password
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-password HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 90
# > 
# < HTTP/1.1 401 Unauthorized
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 58
# < ETag: W/"3a-OH4rb+Uz/HVS/9lb4AJCRzP0C74"
# < Date: Wed, 27 Dec 2023 05:49:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"CredentialsError","message":"wrong credentials"}


CASE "wrong id"

curl 'http://localhost:8000/users/change-password' \
-H 'Authorization: Bearer zzzzzzzzzzz' \
-H 'Content-Type: application/json' \
-d '{ "newPassword": "777777777", "newPasswordConfirm": "777777777", "password": "999999999" }' \
-X PATCH \
-v

# CASE wrong id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-password HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer zzzzzzzzzzz
# > Content-Type: application/json
# > Content-Length: 90
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Wed, 27 Dec 2023 05:49:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user not found"}%             