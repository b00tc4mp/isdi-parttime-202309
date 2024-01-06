source pepetest.sh

TEST "toggle-like-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/735ila7f8mc0/likes' \
-H 'Authorization: Bearer 4di130e14fa0' \
-X PATCH \
-v

# > PATCH /posts/735ila7f8mc0/likes HTTP/1.1      
# > Host: localhost:8000  
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 4di130e14fa0
# >
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express 
# < Date: Fri, 05 Jan 2024 02:38:58 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# * Connection #0 to host localhost left intact 

CASE "server fails"(eg: fails on loading collection)

# > PATCH /posts/7e5klaogm6o0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 4945v51dd8i0

# < HTTP/1.1 500 Internal Server Error
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 96
# < ETag: W/"60-ZnyQOhV6XTKarDgod80mnhR/9mQ"
# < Date: Thu, 14 Dec 2023 20:27:50 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"SystemError","message":"ENOENT: no such file or directory, open './data/users-.json'"}