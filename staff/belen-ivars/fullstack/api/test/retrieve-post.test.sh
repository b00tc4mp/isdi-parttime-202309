source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 61t6qhvtsos0' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 61t6qhvtsos0

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 949
# < ETag: W/"3b5-9yTn7O7/U+sNFKMnQVMhLO9JKNc"
# < Date: Sun, 07 Jan 2024 00:47:51 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 
# [{"id":"5430cj18p6o0","author":{"id":"206s36wbyvpc","name":"Cara Basseta"},"image":"http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg","text":"hello!","likes":["3zllyluwex40","206s36wbyvpc"],"liked":false,"fav":false},{"id":"5430cj18p5k0","author":{"id":"7ewdmsy1f1s0","name":"Wendy Darling"},"image":"https://elsborrellons.com/wp-content/uploads/2020/08/la-superheroi%CC%88na.jpg","text":"smile!","likes":["206s36wbyvpc"],"liked":false,"fav":false},{"id":"7fuf3ea5w1o0","author":{"id":"3zllyluwex40","name":"Napi Col"},"image":" https://i.etsystatic.com/9495620/r/il/b8853a/3046206824/il_1588xN.3046206824_2ghg.jpg","text":"crochet version of me","likes":[],"liked":false,"fav":false},{"id":"14n9ln5mthls","author":{"id":"206s36wbyvpc","name":"Cara Basseta"},"image":"http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg","text":"Hola!","likes":[],"liked":false,"fav":false}]

CASE "success on non-existing user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 5a9y1ojhbec0' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 5a9y1ojhbec0

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 52
# < ETag: W/"34-Cs2INrsYwSHLSHCKVUFPEWh9NjI"
# < Date: Sun, 07 Jan 2024 00:47:51 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"NotFoundError","message":"user not found"}