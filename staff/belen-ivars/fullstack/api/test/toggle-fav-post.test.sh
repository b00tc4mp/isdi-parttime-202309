source pepetest.sh

TEST "toggle-fav-post"

CASE "succes on correct data"

curl 'http://localhost:8000/posts/659ac06c0e890e8a7a2ddaaa/favs' \
-H 'Authorization: Bearer 659b348c696ad77021d9e2f8' \
-X PATCH \
-v

CASE "succes on wrong post id"

curl 'http://localhost:8000/posts/859ac06c0e890e8a7a2ddaaa/favs' \
-H 'Authorization: Bearer 659b348c696ad77021d9e2f8' \
-X PATCH \
-v