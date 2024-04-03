echo TEST "delete-order"

echo CASE "Successfully deleted"

curl 'http://localhost:9000/order/65ff115b04c95019b3f02994' \
-X 'DELETE' \
-v

# TEST delete-order
# CASE Successfully deleted
# * processing: http://localhost:9000/order/65ff115b04c95019b3f02994
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > DELETE /order/65ff115b04c95019b3f02994 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Fri, 29 Mar 2024 12:36:02 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0