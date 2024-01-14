source pepetest.sh

TEST "toggle-like-post"

CASE "success"

curl 'http://localhost:8000/posts/40ga0cl8bd00/likes' \
-H 'Authorization: Bearer amhkljhnhc4' \
-X PATCH \
-v

# CASE success
# TEST toggle-like-post


# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /posts/40ga0cl8bd00/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Wed, 27 Dec 2023 07:04:45 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5