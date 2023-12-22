source pepetest.sh

TEST "register-user"

CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{"name": "Tom Ate", "email": "tom@ate.com", "password": "123123123" }' \
-v

# CASE success on new user
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 69
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Fri, 22 Dec 2023 19:56:09 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0


CASE "fail on already existing user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name": "Pepito Grillo", "email": "pepito@grillo2.com", "password": "123123123" }' \
-v

# CASE fail on already existing user
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 83
# > 
# < HTTP/1.1 409 Conflict
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 57
# < ETag: W/"39-O/EctU8+xmfYttvvXZ9ndq09C3A"
# < Date: Fri, 22 Dec 2023 20:34:49 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"DuplicityError","message":"user alredy exists"}%      