source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 659abc660e890e8a7a2ddaa5' \
-v