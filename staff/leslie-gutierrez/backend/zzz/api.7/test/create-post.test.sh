source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/users/posts' \
-H 'Authorization: Bearer 4di130e14fa0' \
-H 'Content-Type: application/json' \
-d '{"image":"https://miro.medium.com/v2/resize:fit:1024/1*OohqW5DGh9CQS4hLY5FXzA.png", "text":"Hello, World!"}' \
-v
