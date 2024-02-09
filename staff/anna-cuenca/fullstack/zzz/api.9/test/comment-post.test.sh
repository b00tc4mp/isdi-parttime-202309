source pepetest.sh

TEST "comment-post"

CASE "success on correct data"

curl 'http://localhost:9000/posts/65b5fbf9b65f08bf17e47b58/comments' \
-H 'Authorization: Bearer 65afe3cee4a6208ef9bf08b0' \
-H 'Content-Type: application/json' \
-v