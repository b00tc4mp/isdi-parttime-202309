source pepetest.sh

TEST "toggle-like-post"

CASE "succes on correct data"

curl 'http://localhost:8000/posts/5430cj18p5k0/likes' \
-H 'Authorization: Bearer 3zllyluwex40' \
-X PATCH \
-v

# > PATCH /posts/5430cj18p5k0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3zllyluwex40
 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Tue, 02 Jan 2024 23:20:00 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

CASE "server fails" (eg: fails on loading collection)

# > PATCH /posts/5430cj18p5k0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3zllyluwex40
 
# < HTTP/1.1 500 Internal Server Error
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 36
# < ETag: W/"24-mM/SGtdLUAiEAG4t65M/8hSvVAU"
# < Date: Tue, 02 Jan 2024 23:30:55 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 
# {"error":"SystemError","message":""}