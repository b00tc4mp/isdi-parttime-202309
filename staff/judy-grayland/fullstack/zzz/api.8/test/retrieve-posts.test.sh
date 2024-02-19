#!/bin/bash

source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65cccbbe6c9e4ed81a597cec' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 65b0f34bf9beb466beb3a8df
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 970
# < ETag: W/"3ca-3wJjzWxhlgLOWZfMySNhfQ46Gps"
# < Date: Wed, 24 Jan 2024 16:10:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# [{"author":{"name":"Tomate Cherry","id":"65b0f34bf9beb466beb3a8df"},"image":"https://content.fortune.com/wp-content/uploads/2023/08/Barbie-Dancing-MCDBARB_WB048.jpg","text":"Let's dance the night away!","favs":[],"likes":["65b0f579f9beb466beb3a8e1","65b0f34bf9beb466beb3a8df"],"id":"65b0fc7bf9beb466beb3a8e2","liked":true,"fav":true},{"author":{"name":"Agua Cate","id":"65b0f579f9beb466beb3a8e1"},"image":"https://www.rollingstone.com/wp-content/uploads/2023/08/ken-song.jpg","text":"Just Ken","favs":[],"likes":["65b0f34bf9beb466beb3a8df"],"id":"65b0fddcf9beb466beb3a8e3","liked":true,"fav":true},{"author":{"name":"Tomate Cherry","id":"65b0f34bf9beb466beb3a8df"},"image":"https://i.guim.co.uk/img/media/89e26240da3c49a5053f4b750f9c4a749508ab6f/111_0_2415_1450/master/2415.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6c581f2b42dba6b9dedb5e4f02b77b71","text":"Long live the lettuce!","likes":[],"id":"65b133b99ae8ce5cb48ecd67","liked":false,"fav":false}]%  
   
