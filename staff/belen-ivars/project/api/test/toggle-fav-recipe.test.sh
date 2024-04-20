source pepetest.sh

TEST 'toggle-fav-recipe'

CASE 'success on current user'

curl 'http://localhost:9000/users/66229b4f6c6c99938fab1a5b' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQ2NDJlOTY5NWNlMDFiNTM1ODVhODUiLCJpYXQiOjE3MTM2Mjg2NjgsImV4cCI6MTcxMzYzMjI2OH0.dJe5OIV7Un3fU6wcBTA2uhRhxAr0AmdPq8k_37X458w'  \
-v

# > POST /recipes HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 187
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Thu, 21 Mar 2024 17:45:59 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

# CASE "fail on non existing user"

# curl 'http://localhost:9000/recipes' \
# -H 'Content-Type: application/json' \
# -d '{"author": "65d655fac1dd88f9aee917d7", "title": "Colors", "description": "Persona con pintura corporal", "image":"https://www.pexels.com/es-es/foto/persona-con-pintura-corporal-1209843/"}' \
# -v

# > POST /recipes HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 187
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Thu, 21 Mar 2024 17:45:59 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user not found"}% 