echo TEST "toggle-like-post"

echo CASE "success on correct data"

curl 'http://localhost:9000/posts/65aec91bc998cbae21f56640/likes' \
-H 'Authorization: Bearer 65aec7d3b74f4a52aceedd65' \
-X PATCH \
-v