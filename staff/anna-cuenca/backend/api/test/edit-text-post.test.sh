source pepetest.sh

TEST "edit-text-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/6595064381b9e9c247381d20/text' \
-H 'Authorization: Bearer 65944ed178f044ee3aece02b' \
-H 'Content-Type: application/json' \
-d '{ "postId": "6595064381b9e9c247381d20", "text": "Mejor al horno!"}' \
-X PATCH \
-v


# > PATCH /posts/4mls4h86aba0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer 3vxs04m50tk0
# > 

# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Sun, 17 Dec 2023 20:13:13 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# CASE "server fails"
#  PATCH /posts/4mls4h86aba0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer 3vxs04m50tk0
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 500 Internal Server Error
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 96
# < ETag: W/"60-ZnyQOhV6XTKarDgod80mnhR/9mQ"
# < Date: Sun, 17 Dec 2023 20:17:58 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"SystemError","message":"ENOENT: no such file or directory, open './data/users-.json'"}%   