source pepetest.sh

TEST 'retrieve-recipes'

CASE 'success on current user'

curl 'http://localhost:9000/recipes/65f85ac7883fd3713c8bd3a3' \
-H 'Authorization: Bearer 65f85ac7883fd3713c8bd3a3' \
-v

# > GET /recipes/65f85ac7883fd3713c8bd3a3 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 65f85ac7883fd3713c8bd3a3
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 1125
# < ETag: W/"465-DMOd83RcJKRMoeR/PypUE8SJ5aU"
# < Date: Tue, 09 Apr 2024 17:37:27 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# [{"_id":"65f883f4fb135521e8161c93","title":"Colors","description":"Persona con pintura corporal","image":"https://www.pexels.com/es-es/foto/persona-con-pintura-corporal-1209843/","author":"65d655fac1dd88f9aee917d6","__v":0},{"_id":"65f97adbd699fa7945c5d178","title":"Colors","description":"Persona con pintura corporal","image":"https://www.pexels.com/es-es/foto/persona-con-pintura-corporal-1209843/","author":"65d655fac1dd88f9aee917d6","__v":0},{"_id":"65f97ae4ee6c8ad8251da2b0","title":"Colors","description":"Persona con pintura corporal","image":"https://www.pexels.com/es-es/foto/persona-con-pintura-corporal-1209843/","author":"65d655fac1dd88f9aee917d6","__v":0},{"_id":"65fc725721104edb3ca0821b","title":"Colors","description":"Persona con pintura corporal","image":"https://www.pexels.com/es-es/foto/persona-con-pintura-corporal-1209843/","author":"65d655fac1dd88f9aee917d6","__v":0},{"_id":"65fc7fbf9c9ec7ea25f03601","title":"sdfgs","description":"srfwerf","image":"https://sorprendele.es/storage/2022/11/tassa-de-la-terreta-menges-mes-que-el-tio-sangonera-600x600.jpg","author":"65f85ac7883fd3713c8bd3a3","__v":0}]

CASE "fail on non existing user"

curl 'http://localhost:9000/recipes/65d642e9695ce01b53585a84' \
-H 'Authorization: Bearer 65d642e9695ce01b53585a84' \
-v

# > GET /recipes/65d642e9695ce01b53585a84 HTTP/1.1
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
# < Date: Tue, 09 Apr 2024 17:37:27 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"name":"NotFoundError"}%     
