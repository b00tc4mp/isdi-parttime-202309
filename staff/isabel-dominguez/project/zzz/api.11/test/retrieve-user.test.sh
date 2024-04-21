echo TEST "retrieve-user"

echo CASE "success on correct token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU3NTY3NjJjZjRiMGI3ODEwNzVlZDkiLCJpYXQiOjE3MDk2NjAwMTUsImV4cCI6MTcwOTY2MzYxNX0.8i2Wr33SGDqAFw43pZhQWp_Opgi8PFgcWMN4HbNZv50' \
-v

# TEST retrieve-user
# CASE success on correct token
# * processing: http://localhost:9000/users
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /users HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU3NTY3NjJjZjRiMGI3ODEwNzVlZDkiLCJpYXQiOjE3MDk2NjAwMTUsImV4cCI6MTcwOTY2MzYxNX0.8i2Wr33SGDqAFw43pZhQWp_Opgi8PFgcWMN4HbNZv50
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 19
# < ETag: W/"13-6WtBlAj7hEi29Q9uRrUVVn0dcFk"
# < Date: Tue, 05 Mar 2024 17:34:03 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# {"name":"Man Zana"}