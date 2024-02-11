echo TEST "retrieve-posts"

echo CASE "success on correct user id"

curl 'http://localhost:9000/posts' \
-H 'Authorization: Bearer 6582c2d8462e278dec85c853' \
-v

