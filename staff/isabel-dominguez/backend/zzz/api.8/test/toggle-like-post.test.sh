echo TEST "toggle-like-post"

echo CASE "success on correct data"

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./test/retrieve-user.test.sh

curl 'http://localhost:8000/posts/4unovwbpfji0/likes' \
-H 'Authorization: Bearer amhkljhnhc4' \
-X PATCH \
-v

# > PATCH /posts/4unovwbpfji0/likes HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4

# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Date: Sun, 17 Dec 2023 13:12:58 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

echo CASE "server fails"(eg: fails on loading collection)

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