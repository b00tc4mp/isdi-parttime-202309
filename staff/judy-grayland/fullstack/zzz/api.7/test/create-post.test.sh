source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65cccbbe6c9e4ed81a597cec' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://i.guim.co.uk/img/media/89e26240da3c49a5053f4b750f9c4a749508ab6f/111_0_2415_1450/master/2415.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6c581f2b42dba6b9dedb5e4f02b77b71", "text": "Long live the lettuce!" }' \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3kmmn4f11xe0
# > Content-Type: application/json
# > Content-Length: 241

# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Sat, 13 Jan 2024 20:34:47 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0