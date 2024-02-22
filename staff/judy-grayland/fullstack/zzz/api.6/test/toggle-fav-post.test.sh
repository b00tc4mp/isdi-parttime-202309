# source pepetest.sh

# TEST "toggle-fav-post"

# CASE "success on correct data"

curl 'http://localhost:8000/posts/65b541279135d27445f27aa3/favs' \
-H 'Authorization: Bearer 65b0f579f9beb466beb3a8e1' \
-X PATCH \
-v

# > PATCH /posts/t8gzwceff0/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3kmmn4f11xe0

# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Sun, 14 Jan 2024 06:21:25 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# CASE "fails on incorrect post id"

curl 'http://localhost:8000/posts/55b541279135d27445f27aa3/favs' \
-H 'Authorization: Bearer 65b0f579f9beb466beb3a8e1' \
-X PATCH \

# > PATCH /posts/55b541279135d27445f27aa3/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 65b0f579f9beb466beb3a8e1

# < HTTP/1.1 404 Not Found
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-0DGpzzWendF/p1JIFqNhgJZ88G0"
# < Date: Wed, 31 Jan 2024 08:03:40 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"NotFoundError","message":"post not found"}

