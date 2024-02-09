source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:9000/posts' \
-H 'Authorization: Bearer 65abeea7ccb29864b82b9dc4' \
-v