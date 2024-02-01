source pepetest.sh

TEST "toggle-fav-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts/65a1681f1699111e56dede32/favs' \
-H 'Authorization: Bearer 659eda7f439e5bb06833d695' \
-X PATCH \
-v

# > PATCH /posts/65a1681f1699111e56dede32/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1       
# > Accept: */*
# > Authorization: Bearer 659eda7f439e5bb06833d695
# >
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express        
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Thu, 25 Jan 2024 17:03:42 GMT
# < Connection: keep-alive       
# < Keep-Alive: timeout=5    

CASE "fails on wrong post id"
curl 'http://localhost:8000/posts/85a1681f1699111e56dede32/favs' \
-H 'Authorization: Bearer 659eda7f439e5bb06833d695' \
-X PATCH \
-v

# PATCH /posts/85a1681f1699111e56dede32/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1       
# > Accept: */*
# > Authorization: Bearer 659eda7f439e5bb06833d695
# >
# < HTTP/1.1 404 Not Found       
# < X-Powered-By: Express        
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# <
# {"error":"NotFoundError","message":"post not found"}* Connection #0 to host localhost left intact