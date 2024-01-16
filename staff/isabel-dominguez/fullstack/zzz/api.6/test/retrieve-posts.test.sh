echo TEST "retrieve-posts"

echo CASE "success on correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 659d8f7db7c5279f8705b26d' \
-v

# TEST retrieve-posts
# CASE success on correct user id
# * processing: http://localhost:8000/posts
# *   Trying [::1]:8000...
# * Connected to localhost (::1) port 8000
# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 659d8f7db7c5279f8705b26d
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 2172
# < ETag: W/"87c-pMpG9I2tJPbHbDxBRPrnko8+GzQ"
# < Date: Wed, 10 Jan 2024 17:47:21 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# [{"author":{"name":"Li mon","id":"659d80cd92931dda482823f6"},"image":"https://cdn5.dibujos.net/dibujos/pintados/201443/dos-manzanas-comida-frutas-pintado-por-isis1234-9909248.jpg","text":"I am a Limon","likes":[],"id":"659d8119b8b45f2bef89899e","liked":false,"fav":false},{"author":{"name":"Li mon","id":"659d80cd92931dda482823f6"},"image":"https://cdn5.dibujos.net/dibujos/pintados/201443/dos-manzanas-comida-frutas-pintado-por-isis1234-9909248.jpg","text":"I am a Limon","likes":[],"id":"659d812158dc335c2b7891b1","liked":false,"fav":false},{"author":{"name":"Li mon","id":"659d80cd92931dda482823f6"},"image":"https://cdn5.dibujos.net/dibujos/pintados/201443/dos-manzanas-comida-frutas-pintado-por-isis1234-9909248.jpg","text":"I am a Limon","likes":["659d80f8aab595d1bf1d8ece"],"id":"659d824f9f02bc61a6c11859","liked":false,"fav":false},{"author":{"name":"Peter Pan","id":"659d8f7db7c5279f8705b26d"},"image":"https://imgs.search.brave.com/dnrINYrDQGD3gGn9n1uaaDiCb1IVtUeZ_-DWp39eRyY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/NzI1NDE4My9waG90/by9wZXRlci1wYW4t/bG9iYnljYXJkLTE5/NTMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUxtUUZWTGdD/R2tsYXEzU0wtam9E/T2RMWFI0NTBiNVFT/bGQtTXkyamR3YUk9","text":"I am","likes":[],"id":"659d8f90b7c5279f8705b27c","liked":false,"fav":false},{"author":{"name":"O Livia","id":"659d998329ee11d6151ee661"},"image":"https://imgs.search.brave.com/lht2lHdWqFh4SRLHFuX7xHL1EVbzzb79pnDqYuui8dM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVkL2Y3/LzY1LzVkZjc2NTUz/N2IzMTQ1MGZhOTY5/YWUzYjk1ZTFhYmY4/LmpwZw","text":"remember this peter","likes":["659d8f7db7c5279f8705b26d"],"id":"659d99a329ee11d6151ee670","liked":true,"fav":false},{"author":{"name":"Man zana","id":"659d80f8aab595d1bf1d8ece"},"image":"https://imgs.search.brave.com/dnrINYrDQGD3gGn9n1uaaDiCb1IVtUeZ_-DWp39eRyY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/NzI1NDE4My9waG90/by9wZXRlci1wYW4t/bG9iYnljYXJkLTE5/NTMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUxtUUZWTGdD/R2tsYXEzU0wtam9E/T2RMWFI0NTBiNVFT/bGQtTXkyamR3YUk9","text":"I am","likes":["659d998329ee11d6151ee661"],"id":"659d99fc29ee11d6151ee682","liked":false,"fav":true}]* Connection #0 to host localhost left intact