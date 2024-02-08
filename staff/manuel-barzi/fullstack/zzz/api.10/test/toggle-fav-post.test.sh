source pepetest.sh

TEST "toggle-fav-post"

CASE "success on correct data"

curl 'http://localhost:9000/posts/65aec91bc998cbae21f56640/favs' \
-H 'Authorization: Bearer 65aec7d3b74f4a52aceedd65' \
-X PATCH \
-v

# CASE "fails on wrong post id"
# curl 'http://localhost:9000/posts/859c4a0d735c5e851dad76cd/favs' \
# -H 'Authorization: Bearer 65849effd6fe566e658c5580' \
# -X PATCH \
# -v
