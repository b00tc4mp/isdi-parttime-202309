source pepetest.sh

TEST "edit-text-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/65992f24bad309e29f867be1/text' \
-H 'Authorization: Bearer 65959e2a7eff18b095527371' \
-H 'Content-Type: application/json' \
-d '{ "postId": "65992f24bad309e29f867be1", "text": "Mejor los Canarios!"}' \
-X PATCH \
-v