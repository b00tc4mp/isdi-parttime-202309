source pepetest.sh

TEST "retrieve-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 1mtb9uvewfmo' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer 1mtb9uvewfmo
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2198
# < ETag: W/"896-u6b7VATJu5dApGha/SfuPvYidis"
# < Date: Thu, 21 Dec 2023 13:43:24 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# [{"id":"7i7gll7ut0w0","author":{"id":"1mtb9uvewfmo","name":"Gar Banzo"},"image":"https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_219547156-min.jpg","text":"Garbanzo!","likes":[],"liked":false,"fav":false},{"id":"4mls4h86aba0","author":{"id":"3vxs04m50tk0","name":"Lechu Guita"},"image":"https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lechuga-dibujada-mano_23-2150700533.jpg","text":"Hi there","likes":[],"liked":false,"fav":false},{"id":"78nie5ez4hc0","author":{"id":"3vxs04m50tk0","name":"Lechu Guita"},"image":"https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lechuga-dibujada-mano_23-2150700533.jpg","text":"Hi there","likes":[],"liked":false,"fav":false},{"id":"3thwrtduym40","author":{"id":"3vxs04m50tk0","name":"Lechu Guita"},"image":"https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lechuga-dibujada-mano_23-2150700533.jpg","text":"Hi there","likes":[],"liked":false,"fav":false},{"id":"ibyfbs7frfc","author":{"id":"3vxs04m50tk0","name":"Lechu Guita"},"image":"https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lechuga-dibujada-mano_23-2150700533.jpg","text":"Hi there","likes":[],"liked":false,"fav":false},{"id":"465vknv1dy40","author":{"id":"lr4s8bbvagg","name":"Choco Late"},"image":"https://img.freepik.com/vector-premium/ilustracion-chocolate-saliendo-envoltura_498928-124.jpg","text":"Sweet","likes":[],"liked":false,"fav":false},{"id":"7hktcyrgcwg0","author":{"id":"lr4s8bbvagg","name":"Choco Late"},"image":"https://img.freepik.com/vector-premium/ilustracion-chocolate-saliendo-envoltura_498928-124.jpg","text":"Sweet","likes":[],"liked":false,"fav":false},{"id":"3ptptmhvwje0","author":{"id":"lr4s8bbvagg","name":"Choco Late"},"image":"https://img.freepik.com/vector-premium/ilustracion-chocolate-saliendo-envoltura_498928-124.jpg","text":"Sweet","likes":[],"liked":false,"fav":false},{"id":"6fpfqfucrto0","author":{"id":"5tw7oh7a0n80","name":"Pasta Naga"},"image":"https://p.turbosquid.com/ts-thumb/55/Wr0vEa/w0lD4FbT/1r122/jpg/1591265722/600x600/fit_q87/3e7fb0b5ac0953b46b41e13d2c1fc6fab1ed63c8/1r122.jpg","text":"Love Orange","likes":["3vxs04m50tk0"],"liked":false,"fav":false}]

CASE "fails on non-existing user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 69d4ph8zzj01' \
-v


# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer 69d4ph8zzj01
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Thu, 21 Dec 2023 13:43:24 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"Error","message":"user not found"}%  