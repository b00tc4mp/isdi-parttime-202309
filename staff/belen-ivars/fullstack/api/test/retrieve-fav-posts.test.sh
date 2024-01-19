echo TEST "retrieve-fav-posts"

echo CASE "on success correct user id"

curl 'http://localhost:8000/posts/favs' \
-H 'Authorization: Bearer 659abc660e890e8a7a2ddaa5' \
-v

# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Authorization: Bearer 659abc660e890e8a7a2ddaa5
 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2396
# < ETag: W/"95c-FxqAPSx0q+/P2/y/XYXn/9GOuvw"
# < Date: Wed, 10 Jan 2024 17:49:37 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
 

# [{"author":{"name":"Napi Col","id":"659abc660e890e8a7a2ddaa5"},"image":"https://i.etsystatic.com/9495620/r/il/b8853a/3046206824/il_1588xN.3046206824_2ghg.jpg","text":"My made with crochet portrait","likes":["659ae94ae670a9922ac41776","659ae94ae670a9922ac41776"],"id":"659abe6d0e890e8a7a2ddaa8","liked":false,"fav":true},{"author":{"name":"Wendy Darling","id":"659ab9e20e890e8a7a2ddaa3"},"image":"https://elsborrellons.com/wp-content/uploads/2020/08/la-superheroi%CC%88na.jpg","text":"Smile!","likes":[],"id":"659abe8e0e890e8a7a2ddaa9","liked":false,"fav":false},{"author":{"name":"Peter Pan","id":"659abc140e890e8a7a2ddaa4"},"image":"https://m.media-amazon.com/images/M/MV5BMzIwMzUyYTUtMjQ3My00NDc3LWIyZjQtOGUzNDJmNTFlNWUxXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_FMjpg_UX1000_.jpg","text":"My grandpa","likes":[],"id":"659ac06c0e890e8a7a2ddaaa","liked":false,"fav":false},{"author":{"name":"Peter Pan","id":"659abc140e890e8a7a2ddaa4"},"image":"https://filasiete.com/wp-content/uploads/2020/05/peterpan.jpg","text":"Hello, Campa!","likes":[],"id":"659aeff1562f1d72637f94d2","liked":false,"fav":false},{"author":{"name":"Wendy Darling","id":"659ab9e20e890e8a7a2ddaa3"},"image":"https://muhimu.es/wp-content/uploads/2015/02/Wendy-Darling-peter-pan-sindrome.jpg","text":"Flying free","likes":[],"id":"659b282174e4489349bbcbad","liked":false,"fav":false},{"author":{"name":"Coca Dacsa","id":"659b348c696ad77021d9e2f8"},"image":"http://www.lafaneca.net/images/virtuemart/product/resized/calabacines-451x300_0x200.jpg","text":"hello!","likes":["659b24a58a11867925806583"],"id":"659dd2c44b5620cca7c1f27a","liked":false,"fav":false},{"author":{"name":"Napi Col","id":"659abc660e890e8a7a2ddaa5"},"image":" https://i.etsystatic.com/9495620/r/il/b8853a/3046206824/il_1588xN.3046206824_2ghg.jpg","text":"crochet version of me","likes":[],"id":"659dd91ca1221c6a5a8f3a87","liked":false,"fav":false},{"author":{"name":"Napi Col","id":"659abc660e890e8a7a2ddaa5"},"image":" https://i.etsystatic.com/9495620/r/il/b8853a/3046206824/il_1588xN.3046206824_2ghg.jpg","text":"crochet version of me","likes":[],"id":"659de0f90afd5db75a1da5f1","liked":false,"fav":false},{"author":{"name":"Napi Col","id":"659abc660e890e8a7a2ddaa5"},"image":" https://i.etsystatic.com/9495620/r/il/b8853a/3046206824/il_1588xN.3046206824_2ghg.jpg","text":"crochet version of me","likes":[],"id":"659ed226f8f42ad24d8dcac2","liked":false,"fav":false}