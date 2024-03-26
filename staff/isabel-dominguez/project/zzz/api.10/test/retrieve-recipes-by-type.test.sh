echo "TEST: Retrieve Recipes By Type"

echo "CASE: Success on retrieving recipes Make-up type"

curl 'http://localhost:9000/recipes/Make-up' \
-v

# TEST: Retrieve Recipes By Type
# CASE: Success on retrieving recipes Make-up type
# * processing: http://localhost:9000/recipes/Make-up
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /recipes/Make-up HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2615
# < ETag: W/"a37-dpyXvujYflCe73wQM64ymhEEg/o"
# < Date: Wed, 06 Mar 2024 17:56:56 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5


echo "CASE: Success on retrieving recipes Treatment type"

curl 'http://localhost:9000/recipes/Treatment' \
-v

# CASE: Success on retrieving recipes Treatment type
# * processing: http://localhost:9000/recipes/Treatment
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /recipes/Treatment HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 3598
# < ETag: W/"e0e-83XwvO/zNK2aNChz3ulSjy5AFWE"
# < Date: Wed, 06 Mar 2024 17:58:27 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5