echo "TEST: Retrieve Recipes"

echo "CASE: Success on retrieving recipes"

curl 'http://localhost:9000/recipes' \
-v

# TEST: Retrieve Recipes
# CASE: Success on retrieving recipes
# * processing: http://localhost:9000/recipes
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /recipes HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 6212
# < ETag: W/"1844-YkoEJ9WGwjfPRl3dfvuZmSND4OY"
# < Date: Tue, 05 Mar 2024 19:56:32 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5