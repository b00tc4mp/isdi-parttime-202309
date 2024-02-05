echo TEST "create-post"

echo CASE "success on correct data"

curl 'http://localhost:9000/posts' \
-H 'Authorization: Bearer 65aec7d3b74f4a52aceedd65' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg", "text": "Hello, World!" }' \
-v