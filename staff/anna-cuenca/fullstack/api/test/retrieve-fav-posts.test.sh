source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:9000/posts/favs' \
-H 'Authorization: Bearer 65afdf535c84b191db2dad5b' \
-v