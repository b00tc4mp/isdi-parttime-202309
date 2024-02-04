echo TEST "retrieve-user"

echo CASE "success on correct token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFkNjk1OWM3NWMwMzFhZDRhNjg2ODciLCJpYXQiOjE3MDY4OTQ5Nzh9.g5F1rzjOUPu-u7lQZQsotFcJ8_kSQaQ9H2O7VP22EEc' \
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
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFkNjk1OWM3NWMwMzFhZDRhNjg2ODciLCJpYXQiOjE3MDY4OTQ5Nzh9.g5F1rzjOUPu-u7lQZQsotFcJ8_kSQaQ9H2O7VP22EEc
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 18
# < ETag: W/"12-hkoa3MphGUMC3kvstvoQsI/KbtA"
# < Date: Fri, 02 Feb 2024 17:31:49 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"name":"O Livia"}* Connection #0 to host localhost left intact