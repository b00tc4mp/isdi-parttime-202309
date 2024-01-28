source pepetest.sh

TEST "toggle-fav-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/65b6b8d7863a3781cd5d98d3/favs' \
-H 'Authorization: Bearer 65b6b67b9eefc0521f3fc496' \
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



