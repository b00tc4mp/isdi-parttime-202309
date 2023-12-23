source pepetest.sh

TEST "toggle-like-post"

CASE "success"

curl 'http://localhost:8000/posts/40ga0cl8bd00/likes' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-X PATCH \
-v