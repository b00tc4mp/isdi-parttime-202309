source pepetest.sh

TEST "toggle-like-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/659c4a0d735c5e851dad76cd/likes' \
-H 'Authorization: Bearer 65849effd6fe566e658c5580' \
-X PATCH \
-v

CASE "fails on wrong post id"
curl 'http://localhost:8000/posts/859c4a0d735c5e851dad76cd/likes' \
-H 'Authorization: Bearer 65849effd6fe566e658c5580' \
-X PATCH \
-v
