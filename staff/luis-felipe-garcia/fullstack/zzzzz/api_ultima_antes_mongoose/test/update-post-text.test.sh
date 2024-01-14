source pepetest.sh

TEST "update-post"

CASE "success"

curl 'http://localhost:8000/posts/4d543b5sy540/updatePost' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-H 'Content-Type: application/json' \
-d '{ "postId": "4d543b5sy540", "text": "POST UPDATED BY CURL TEST 3" }' \
-X PATCH \
-v

# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /posts/4d543b5sy540/updatePost HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# > Content-Type: application/json
# > Content-Length: 67
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Thu, 28 Dec 2023 06:57:32 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact


CASE "wrong post id"

curl 'http://localhost:8000/posts/4d543b5sy540/updatePost' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-H 'Content-Type: application/json' \
-d '{ "postId": "WRONGPOSTID", "text": "POST UPDATED BY CURL TEST 3" }' \
-X PATCH \
-v

# CASE wrong post id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /posts/4d543b5sy540/updatePost HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# > Content-Type: application/json
# > Content-Length: 66
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-a3X/E7F1yMi21vf91aItWrYXNEw"
# < Date: Thu, 28 Dec 2023 06:57:32 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"post do not exist"}



CASE "wrong user"

curl 'http://localhost:8000/posts/4d543b5sy540/updatePost' \
-H 'Authorization: Bearer WRONGUSERID' \
-H 'Content-Type: application/json' \
-d '{ "postId": "4d543b5sy540", "text": "POST UPDATED BY CURL TEST 3" }' \
-X PATCH \
-v

# CASE wrong user
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /posts/4d543b5sy540/updatePost HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer WRONGUSERID
# > Content-Type: application/json
# > Content-Length: 67
# > 
# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 55
# < ETag: W/"37-1Oe+2bS8M2xaFhTj93ez15XtcF4"
# < Date: Thu, 28 Dec 2023 06:57:32 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"NotFoundError","message":"user do not exist"}%  
