source pepetest.sh

TEST "toggle-fav-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/4op7rg7el9y0/favs' \
-H 'Authorization: Bearer 9nbvjt5wugo' \
-X PATCH \
-v



CASE "fails on worng post id"

curl 'http://localhost:8000/posts/4op7rg7el9y0/favs' \
-H 'Authorization: Bearer 9nbvjt5wugo' \
-X PATCH \
-v