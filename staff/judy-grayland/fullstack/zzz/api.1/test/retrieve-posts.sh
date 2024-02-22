#!/bin/bash

source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 3kmmn4f11xe0' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3kmmn4f11xe0

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 656
# < ETag: W/"290-lrl/Z2Zi0lOSNGoRrsa59dZWOzM"
# < Date: Thu, 18 Jan 2024 17:47:09 GMT
# < Connection: keep-alive

# {"id":"t8gzwceff0","author":{"id":"3kmmn4f11xe0","name":"Lechu Guita"},"image":"https://i.guim.co.uk/img/media/89e26240da3c49a5053f4b750f9c4a749508ab6f/111_0_2415_1450/master/2415.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6c581f2b42dba6b9dedb5e4f02b77b71","text":"Long live the lettuce!","likes":["4dw63n42c8a0"],"liked":false,"fav":false},{"id":"7jqpt1z29gg0","author":{"id":"4dw63n42c8a0","name":"Gui Sante"},"image":"https://media.istockphoto.com/id/484594470/photo/world-map-made-form-peas.jpg?s=612x612&w=0&k=20&c=N36WYhSBSOIhHYG-tS3p7SR90lGis_7CJmJuj4NUHmM=","text":"i am on top of the world","likes":[],"liked":false,"fav":false}]   

CASE "fails on invalid user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 3wkmmn4f11xe0' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 3wkmmn4f11xe0

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Thu, 18 Jan 2024 17:47:09 GMT
# < Connection: keep-alive

# {"error":"Error","message":"user not found"}% 