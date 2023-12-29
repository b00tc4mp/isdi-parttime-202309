source pepetest.sh

TEST "toggle-like-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/4op7rg7el9y0/likes' \
-H 'Authorization: Bearer 9nbvjt5wugo' \
-X PATCH \
-v

# > PATCH /posts/4op7rg7el9y0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wugo
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Sun, 17 Dec 2023 09:09:13 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5



CASE "server fails: eg: fail on loading collection"


# > PATCH /posts/4op7rg7el9y0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wugo
# > 
# < HTTP/1.1 500 Internal Server Error
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 96
# < ETag: W/"60-ZnyQOhV6XTKarDgod80mnhR/9mQ"
# < Date: Sun, 17 Dec 2023 09:13:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# * Connection #0 to host localhost left intact
# {"error":"SystemError","message":"ENOENT: no such file or directory, open './data/users-.json'"}%



