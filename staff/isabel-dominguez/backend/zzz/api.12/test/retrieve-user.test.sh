echo TEST "retrieve-user"

echo CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 6599810a2c6f1a3caa0ed9f3' \
-v

# * processing: http://localhost:8000/users
# *   Trying [::1]:8000...
# * Connected to localhost (::1) port 8000
# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 6599810a2c6f1a3caa0ed9f3
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 19
# < ETag: W/"13-6WtBlAj7hEi29Q9uRrUVVn0dcFk"
# < Date: Sat, 06 Jan 2024 16:38:06 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"name":"Man Zana"}* Connection #0 to host localhost left intact