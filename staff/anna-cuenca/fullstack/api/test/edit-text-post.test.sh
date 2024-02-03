source pepetest.sh

TEST "edit-text-post"

CASE "success on correct data"

curl 'http://localhost:9000/posts/65ba930da33136f844b14a0a/text' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWI5M2I4NjlmOGRkODllZWFhZjljMjgiLCJpYXQiOjE3MDY3Njk4NjcsImV4cCI6MTcwNjc3MzQ2N30.BTBs6ndQqowIcH78z-jD571dC0crwzlhSBlIxse7t4o' \
-H 'Content-Type: application/json' \
-d '{ "postId": "65ba930da33136f844b14a0a", "text": "Mejor los Pepinillos Canarios!"}' \
-X PATCH \
-v