source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 4di130e14fa0' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg", "text": "Hello, World!" }' \
-v

# > POST /posts HTTP/1.1   
# > Host: localhost:8000   
# > User-Agent: curl/8.2.1 
# > Accept: */*
# > Authorization: Bearer 4di130e14fa0
# > Content-Type: application/json
# > Content-Length: 123    
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express  
# < Date: Thu, 04 Jan 2024 22:26:17 GMT
# < Connection: keep-alive 
# < Keep-Alive: timeout=5  
# < Content-Length: 0      

 