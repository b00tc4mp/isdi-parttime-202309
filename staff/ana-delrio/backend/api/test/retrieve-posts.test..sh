source pepetest.sh 

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 658d4dd388f3cf1b1fb4d3af' \
-v
