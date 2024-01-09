echo TEST "create-post"

echo CASE "success on correct data"

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./test/retrieve-user.test.sh

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://imgs.search.brave.com/eRNIUxZW-O5G_r8sN6gza15ULjOYE2B-1PSCkE0jCXY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL3lh/eWF5b3kveWF5YXlv/eTExMDkveWF5YXlv/eTExMDkwMDAxOS8x/MDYwMjAwNS1kaWJ1/am9zLWFuaW1hZG9z/LWRlLWNhbGFiYWMl/QzMlQURuLmpwZw", "text": "Hello, World!" }' \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 301

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 66
# < ETag: W/"42-SaEvLKVkuMIMLsYQzaJRjLVQNqQ"
# < Date: Sun, 17 Dec 2023 17:33:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"message":"You have created a new post!.","userId":"amhkljhnhc4"}*