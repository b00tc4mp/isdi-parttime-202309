echo "TEST: Retrieve Products By Type"

echo "CASE: Success on retrieving products RawMaterial type"

curl 'http://localhost:9000/products/RawMaterial' \
-v

# CASE: Success on retrieving products RawMaterial
# * processing: http://localhost:9000/products/RawMaterial
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /products/RawMaterial HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 7327
# < ETag: W/"1c9f-NTqgkyVCMO9mW4K4W6R2rg6VLa4"
# < Date: Wed, 06 Mar 2024 12:34:16 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5


echo "CASE: Success on retrieving products Utensils"

curl 'http://localhost:9000/products/Utensils' \
-v

# CASE: Success on retrieving products Utensils
# * processing: http://localhost:9000/products/Utensils
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /products/Utensils HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2375
# < ETag: W/"947-EryPUkZtO3KTxqnpqabAnjOaUzk"
# < Date: Wed, 06 Mar 2024 12:59:28 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5


echo "CASE: Success on retrieving products Packings"

curl 'http://localhost:9000/products/Packings' \
-v

# CASE: Success on retrieving products Packings
# * processing: http://localhost:9000/products/Packings
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /products/Packings HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2185
# < ETag: W/"889-ajUiCrMQXcC5vWGzsCehdT9bDdo"
# < Date: Wed, 06 Mar 2024 12:59:28 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5