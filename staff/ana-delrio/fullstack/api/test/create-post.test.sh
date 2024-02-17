source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65b6b67b9eefc0521f3fc496' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WoodyWoodpecker-PantryPanic1.png/1024px-WoodyWoodpecker-PantryPanic1.png", "text": "Hello, World!" }
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



