source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 659ef258faed4b36bd8639f3' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg", "text": "Hello, World!" }' \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*     
# > Authorization: Bearer 659ef258faed4b36bd8639f3      
# > Content-Type: application/json    
# > Content-Length: 123
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *    
# < Access-Control-Allow-Headers: *   
# < Access-Control-Allow-Methods: *   
# * Connection #0 to host localhost lef* Connection #0 to host localhost left intact
 