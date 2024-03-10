echo TEST "retrieve-favs"

echo CASE "success on correct retrieved"


curl 'http://localhost:9000/fav-products' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVjNDIwZWViYjAwZmFmNDc0ZWMzNzMiLCJpYXQiOjE3MTAwODUyNTYsImV4cCI6MTcxMDEyMTI1Nn0.kil0ZU1TjTtyIvlhyVBzMogI7y8wKmLGb_wxiSXA6wk' \
-v


# TEST retrieve-favs
# CASE success on correct retrieved
# * processing: http://localhost:9000/fav-products
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /fav-products HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVjNDIwZWViYjAwZmFmNDc0ZWMzNzMiLCJpYXQiOjE3MTAwODUyNTYsImV4cCI6MTcxMDEyMTI1Nn0.kil0ZU1TjTtyIvlhyVBzMogI7y8wKmLGb_wxiSXA6wk
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2122
# < ETag: W/"84a-OfpPbEeQR4kIzZzuaUIC3H/I3Aw"
# < Date: Sun, 10 Mar 2024 15:57:46 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5