source pepetest.sh

TEST "delete-post"

CASE "success on delete post"

curl 'http://localhost:8000/posts/659599ca1244919807eb0768' \
-H 'Authorization: Bearer 658b1787d6c3f0f29677ccc6' \
-X DELETE \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer lr4s8bbvagg
# > Content-Type: application/json
# > Content-Length: 125
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Mon, 18 Dec 2023 12:10:11 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

CASE  "error on wrong user"

curl 'http://localhost:8000/posts/659599ca1244919807eb0768' \
-H 'Authorization: Bearer 65959e2a7eff18b095527371' \
-X DELETE \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer lr4s8bb2agg
# > Content-Type: application/json
# > Content-Length: 125
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Mon, 18 Dec 2023 12:12:43 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"Error","message":"user not found"}