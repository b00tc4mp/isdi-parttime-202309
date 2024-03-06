echo "TEST: Retrieve Products"

echo "CASE: Success on retrieving products"

curl 'http://localhost:9000/products' \
-v

# TEST: Retrieve Products
# CASE: Success on retrieving products
# * processing: http://localhost:9000/products
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /products HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 685
# < ETag: W/"2ad-xrpmxDaTIgTBgVD0vRxg3hI45vU"
# < Date: Mon, 04 Mar 2024 18:53:00 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"_id":"65e4b7ed90600e40b39e5ad5","name":"Aceite de Abisinia","image":"../images/producto1.png","price":4.68,"type":"RawMaterial","__v":0,"id":"65e4b7ed90600e40b39e5ad5"},{"_id":"65e4b804fbcb1244e6035a66","name":"Aceite de Abisinia","image":"../images/producto1.png","price":4.68,"type":"RawMaterial","__v":0,"id":"65e4b804fbcb1244e6035a66"},{"_id":"65e4b8059fb7cb4c1ca0b787","name":"Aceite de Abisinia","image":"../images/producto1.png","price":4.68,"type":"RawMaterial","__v":0,"id":"65e4b8059fb7cb4c1ca0b787"},{"_id":"65e4c7c66ad0b53135bf2144","name":"Aceite de Abisinia","image":"../images/producto1.png","price":4.68,"type":"RawMaterial","__v":0,"id":"65e4c7c66ad0b53135bf2144"}]