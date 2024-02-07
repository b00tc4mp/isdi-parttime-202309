
source pepetest.sh

TEST "delete-post"

CASE "success on delete post"

curl 'http://localhost:9000/posts/65bacafebbd47001653ddb32' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiZWVhN2NjYjI5ODY0YjgyYjlkYzQiLCJpYXQiOjE3MDY3NDA0NDMsImV4cCI6MTcwNjc0NDA0M30.Nb_I2-vc64nFxoKuZW44oO79csvkK0iG7SKiS_QUiQA' \
-X DELETE \
-v