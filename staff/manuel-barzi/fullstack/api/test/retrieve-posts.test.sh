source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65849effd6fe566e658c5580' \
-v