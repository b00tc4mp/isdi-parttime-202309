source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts/favs' \
-H 'Authorization: Bearer 65b6b67b9eefc0521f3fc496' \
-v