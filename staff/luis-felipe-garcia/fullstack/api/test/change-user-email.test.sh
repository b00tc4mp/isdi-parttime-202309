source pepetest.sh

TEST "change-mail"

CASE "success"

curl 'http://localhost:8000/users/change-email' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "newEmail": "CURLcala@bacin.com", "newEmailConfirm": "CURLcala@bacin.com", "password": "123123123" }' \
-X PATCH \
-v

# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 102
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Tue, 26 Dec 2023 21:12:28 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact


CASE "wrong mail"

curl 'http://localhost:8000/users/change-email' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "newEmail": "cala@bacin.com", "newEmailConfirm": "cWRONGMAIL@bacin.com", "password": "123123123" }' \
-X PATCH \
-v


# CASE wrong mail
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 100
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 56
# < ETag: W/"38-sivAe9thQGX2sSNYcWzJ7RIOCbE"
# < Date: Tue, 26 Dec 2023 21:26:24 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"ContentError","message":"emails do not match"}%    



CASE "wrong password"

curl 'http://localhost:8000/users/change-email' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "newEmail": "cala@bacin.com", "newEmailConfirm": "c@bacin.com", "password": "WRONGPASS" }' \
-X PATCH \
-v


# CASE wrong password
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 91
# > 
# < HTTP/1.1 401 Unauthorized
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 58
# < ETag: W/"3a-OH4rb+Uz/HVS/9lb4AJCRzP0C74"
# < Date: Tue, 26 Dec 2023 21:31:50 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"CredentialsError","message":"wrong credentials"}% 


CASE "wrong id"

curl 'http://localhost:8000/users/change-email' \
-H 'Authorization: Bearer zzzzzzzzzzz' \
-H 'Content-Type: application/json' \
-d '{ "newEmail": "cala2@bacin.com", "newEmailConfirm": "cala2@bacin.com", "password": "123123123" }' \
-X PATCH \
-v

# CASE wrong id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/change-email HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer zzzzzzzzzzz
# > Content-Type: application/json
# > Content-Length: 96
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Tue, 26 Dec 2023 21:35:53 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user not found"}%    