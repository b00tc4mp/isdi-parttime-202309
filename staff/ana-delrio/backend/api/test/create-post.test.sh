source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 658961111bef8b597847ec00' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg", "text": "Hello, World!" }
' \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Authorization: Bearer 9nbvjt5wugo
# > Content-Type: application/json
# > Content-Length: 124
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Sat, 16 Dec 2023 18:15:22 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0



