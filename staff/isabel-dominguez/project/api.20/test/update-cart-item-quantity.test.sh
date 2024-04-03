echo TEST "Update-cart-item-quantity"

echo CASE "success changes"

curl 'http://localhost:9000/cart/update/65e864fdc106a4483c4fbcf5/65ff115b04c95019b3f02994/1' \
-X PATCH \
-H 'Content-Type: application/json' \
-v


# TEST Update-cart-item-quantity
# CASE success changes
# * processing: http://localhost:9000/cart/update/65e864fdc106a4483c4fbcf5/65ff115b04c95019b3f02994/1
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > POST /cart/update/65e864fdc106a4483c4fbcf5/65ff115b04c95019b3f02994/1 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Wed, 27 Mar 2024 18:31:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# < 
# * Connection #0 to host localhost left intact