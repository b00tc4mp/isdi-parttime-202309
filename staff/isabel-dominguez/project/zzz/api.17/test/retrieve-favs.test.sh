echo TEST "retrieve-favs"

echo CASE "success on correct retrieved"


curl 'http://localhost:9000/favorites' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWYyMGYxODcyOTBhYTY1ZDg5MWQwN2MiLCJpYXQiOjE3MTA1NzgzMjQsImV4cCI6MTcxMDYxNDMyNH0.kMIuln7IKLG8OCpzdUr3ZTFGyR7Jjpbn8hrXsByE8TI' \
-v


# TEST retrieve-favs
# CASE success on correct retrieved
# * processing: http://localhost:9000/favorites
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /favorites HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWYyMGYxODcyOTBhYTY1ZDg5MWQwN2MiLCJpYXQiOjE3MTA1NzgzMjQsImV4cCI6MTcxMDYxNDMyNH0.kMIuln7IKLG8OCpzdUr3ZTFGyR7Jjpbn8hrXsByE8TI
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 3031
# < ETag: W/"bd7-+o8Cenz2r/Wr9EK+VoFL9QBtKh8"
# < Date: Sat, 16 Mar 2024 08:40:33 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5