echo TEST "create-post"

echo CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65849effd6fe566e658c5580' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg", "text": "Hello, World!" }' \
-v