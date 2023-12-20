source pepetest.sh

TEST "toggle-like-post"

CASE "success"

curl 'http://localhost:8000/posts/1feeau1mv1sw/likes' \
-H 'Authorization: Bearer 7hyl6aor59s0' \
-X PATCH \
-v

# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /posts/1feeau1mv1sw/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 7hyl6aor59s0
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Wed, 20 Dec 2023 04:49:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 