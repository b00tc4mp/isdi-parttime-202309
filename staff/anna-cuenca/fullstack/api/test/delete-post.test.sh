
source pepetest.sh

TEST "delete-post"

CASE "success on delete post"

curl 'http://localhost:8000/posts/659aff424e62f914182bb690' \
-H 'Authorization: Bearer 65959e2a7eff18b095527371' \
-X DELETE \
-v