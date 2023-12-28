source pepetest.sh

TEST "delete-post"

CASE "succes"

CURL -i -v 'http://localhost:8000/users/1g6al6ee05pc/favs' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-H 'Content-Type: application/json' \
-d '{"postId": "1feeau1mv1sw"}' \
-X DELETE \


# CASE succes
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > DELETE /users/1g6al6ee05pc/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# > Content-Type: application/json
# > Content-Length: 26
# > 
# < HTTP/1.1 204 No Content
# HTTP/1.1 204 No Content
# < X-Powered-By: Express
# X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# Access-Control-Allow-Methods: *
# < Date: Thu, 28 Dec 2023 22:54:20 GMT
# Date: Thu, 28 Dec 2023 22:54:20 GMT
# < Connection: keep-alive
# Connection: keep-alive
# < Keep-Alive: timeout=5
# Keep-Alive: timeout=5

# CASE 'post do not exist'

CURL -v 'http://localhost:8000/users/1g6al6ee05pc/favs' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-H 'Content-Type: application/json' \
-d '{"postId": "WRONGPOSTID"}' \
-X DELETE \

# CASE post do not exist
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > DELETE /users/1g6al6ee05pc/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# > Content-Type: application/json
# > Content-Length: 25
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-hX8pmRIXj6VvfpQ6Uy3vjl8iIoM"
# < Date: Thu, 28 Dec 2023 23:00:13 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"post do not found"}%  


CASE 'user do not exists'

CURL -v 'http://localhost:8000/users/1g6al6ee05pc/favs' \
-H 'Authorization: Bearer WRONGUSER' \
-H 'Content-Type: application/json' \
-d '{"postId": "2lfyxcsdzg80"}' \
-X DELETE \

# CASE user do not exists
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > DELETE /users/1g6al6ee05pc/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer WRONGUSER
# > Content-Type: application/json
# > Content-Length: 26
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-tIpYGiuJP4/l7s2ylOR7Rx6yHFk"
# < Date: Thu, 28 Dec 2023 23:09:57 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user do not dound"}%

CASE 'post do not belong to user'

CURL -v 'http://localhost:8000/users/1g6al6ee05pc/favs' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-H 'Content-Type: application/json' \
-d '{"postId": "2lfyxcsdzg80"}' \
-X DELETE \

# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > DELETE /users/1g6al6ee05pc/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# > Content-Type: application/json
# > Content-Length: 26
# > 
# < HTTP/1.1 401 Unauthorized
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 68
# < ETag: W/"44-LDDPL3zJGNaNGAlB/UZ8JeP9heA"
# < Date: Thu, 28 Dec 2023 23:07:22 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"CredentialsError","message":"post do not belongs to user"