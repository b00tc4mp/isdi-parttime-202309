source pepetest.sh

TEST "create-post"

CASE "success"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 658467e375fc0b52c39022e3' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD", "text": "Pepino from agropinente" }' \
-v

# CASE success
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 658467e375fc0b52c39022e3
# > Content-Type: application/json
# > Content-Length: 300
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Fri, 22 Dec 2023 20:46:08 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# < 
# * Connection #0 to host localhost left intact