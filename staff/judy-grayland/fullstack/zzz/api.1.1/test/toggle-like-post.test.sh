source pepetest.sh

TEST "toggle-like-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/t8gzwceff0/likes' \
-H 'Authorization: Bearer 3kmmn4f11xe0' \
-X PATCH \
-v

# > PATCH /posts/t8gzwceff0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3kmmn4f11xe0

# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Sun, 14 Jan 2024 06:21:25 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

CASE "server fails" (eg. putting wrong directory in our jsonParseFromFile in the toggleLikePost logic)

# > PATCH /posts/t8gzwceff0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3kmmn4f11xe0

# < HTTP/1.1 500 Internal Server Error
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 96
# < ETag: W/"60-2263epuNJkHxgzWGXeLeFIYsq9k"
# < Date: Sun, 14 Jan 2024 06:28:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"SystemError","message":"ENOENT: no such file or directory, open './data/-users.json'"}%   