source pepetest.sh

TEST "toggle-fav-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/65abe37795c5be3b208f8bfb/favs' \
-H 'Authorization: Bearer 658961111bef8b597847ec00' \
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



