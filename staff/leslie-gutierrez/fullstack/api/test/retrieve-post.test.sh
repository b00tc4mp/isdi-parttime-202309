source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 659eda7f439e5bb06833d695' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 659eda7f439e5bb06833d695        
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express     
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# ,"image":"https://media.istockphoto.com/id/181072765/es/foto/lechuga-aislado.jpg?s=612x612&w=0&k=20&c=7spdLdTK_iyTUdpdp6cjdHkDE9dCkahoTtnOvQYY8mE=","text":"what a fresh day","likes":[],"id":"65a16268d031269080b33231","liked":false,"fav":false},{"author":{"name":"Man Zana","id":"659ef258faed4b36bd8639f3"},"image":"https://cdn2.vectorstock.com/i/1000x1000/81/46/hello-world-code-vector-22928146.jpg","text":"Hello, World!","likes":[],"id":"65a1681f1699111e56dede32","liked":false,"fav":false}]* Connection #0 to host localhost left intact