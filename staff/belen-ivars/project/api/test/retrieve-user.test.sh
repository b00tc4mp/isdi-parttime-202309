source pepetest.sh

TEST 'retrieve-user'

CASE 'success on current user'

curl 'http://localhost:9000/users/65d642e9695ce01b53585a85' \
-H 'Authorization: Bearer 65d642e9695ce01b53585a85' \
-v

# > GET /users/65d642e9695ce01b53585a85 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 65d642e9695ce01b53585a85
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 167
# < ETag: W/"a7-hPBZLMdCllOf6M6J6ntROpKYu/U"
# < Date: Thu, 21 Mar 2024 17:34:16 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"_id":"65d642e9695ce01b53585a85","name":"Napi Col","email":"napi@col.com","password":"$2a$08$D7lcX5zQvKVnd3M/x63IPeFgc1pbrEaALctEgZ7tvROGNLEsWWioq","favs":[],"__v":0}

CASE "fail on non existing user"

curl 'http://localhost:9000/users/65d642e9695ce01b53585a84' \
-H 'Authorization: Bearer 65d642e9695ce01b53585a84' \
-v

# > GET /users/65d642e9695ce01b53585a84 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 65d642e9695ce01b53585a84
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 24
# < ETag: W/"18-dMQu7DCvMLzkIB4OfTQNazIjBKo"
# < Date: Thu, 21 Mar 2024 17:36:09 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"name":"NotFoundError"}%   
