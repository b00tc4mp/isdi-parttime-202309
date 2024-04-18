source pepetest.sh

TEST 'delete-recipe'

CASE 'success on current user'

curl 'http://localhost:9000/recipes/65fc7fbf9c9ec7ea25f03601' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWY4NWFjNzg4M2ZkMzcxM2M4YmQzYTMiLCJpYXQiOjE3MTM0NTMxMTEsImV4cCI6MTcxMzQ1NjcxMX0.iXUrxzIQztv_8kzU5Fbzrr_HTX67O8XTN8UJP9n0768' \
-X DELETE \
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

CASE "fail on non existing user"

# curl 'http://localhost:9000/recipes' \
# -H 'Content-Type: application/json' \
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