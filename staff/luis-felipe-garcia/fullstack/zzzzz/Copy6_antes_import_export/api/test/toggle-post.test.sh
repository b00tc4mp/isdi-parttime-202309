source pepetest.sh

TEST "toggle-like-post"

CASE "success"

curl 'http://localhost:8000/posts/6584687a75fc0b52c39022e4/likes' \
-H 'Authorization: Bearer 6584656975fc0b52c39022e1' \
-X PATCH \
-v

# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /posts/6584687a75fc0b52c39022e4/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 6584656975fc0b52c39022e1
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Fri, 22 Dec 2023 20:52:11 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5