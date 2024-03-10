echo TEST "toggle-fav-product"

echo CASE "success on correct data"

curl 'http://localhost:9000/products/65e8683deadcfb1397d77890/favs' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVjNDIwZWViYjAwZmFmNDc0ZWMzNzMiLCJpYXQiOjE3MTAwODUyNTYsImV4cCI6MTcxMDEyMTI1Nn0.kil0ZU1TjTtyIvlhyVBzMogI7y8wKmLGb_wxiSXA6wk' \
-X PATCH \
-v


# TEST toggle-fav-product
# CASE success on correct data
# * processing: http://localhost:9000/products/65e8683deadcfb1397d77890/favs
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > PATCH /products/65e8683deadcfb1397d77890/favs HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVjNDIwZWViYjAwZmFmNDc0ZWMzNzMiLCJpYXQiOjE3MTAwODUyNTYsImV4cCI6MTcxMDEyMTI1Nn0.kil0ZU1TjTtyIvlhyVBzMogI7y8wKmLGb_wxiSXA6wk
# >
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Sun, 10 Mar 2024 16:01:00 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# * Connection #0 to host localhost left intact