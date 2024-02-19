source pepetest.sh

TEST "create-post"

CASE "succes on correct data"

curl 'http://localhost:9000/posts' \
-H 'Authorization: Bearer 65b54a7d6506f93382c4bc01' \
-H 'Content-Type: application/json' \
-d '{"image": " https://i.etsystatic.com/9495620/r/il/b8853a/3046206824/il_1588xN.3046206824_2ghg.jpg", "text":"crochet version of me"}' \
-v

#  POST /posts HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 659abc660e890e8a7a2ddaa5
# > Content-Type: application/json
# > Content-Length: 131

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Tue, 09 Jan 2024 23:39:08 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

