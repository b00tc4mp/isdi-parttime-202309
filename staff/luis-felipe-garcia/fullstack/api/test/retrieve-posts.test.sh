source pepetest.sh

TEST "retrieve-posts"

CASE "correct user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 1g6al6ee05pc' \
-v


# CASE correct user id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 3129
# < ETag: W/"c39-nktr5SRyMAmN1oHfG23h/pD/Xwc"
# < Date: Thu, 21 Dec 2023 05:34:11 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# [{"id":"40ga0cl8bd00","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":["1g6al6ee05pc"],"liked":true,"fav":false},{"id":"4d543b5sy540","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":[],"liked":false,"fav":false},{"id":"1whzazyre8e8","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":[],"liked":false,"fav":false},{"id":"368z9lvj8x40","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":[],"liked":false,"fav":false},{"id":"1feeau1mv1sw","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":["7hyl6aor59s0"],"liked":false,"fav":false},{"id":"2e5c1cnxjpz4","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":[],"liked":false,"fav":false},{"id":"3t3nfzsgt4c0","author":{"id":"1g6al6ee05pc","name":"Pe Pino"},"image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD","text":"Pepino from agropinente","likes":[],"liked":false,"fav":false},{"id":"2lfyxcsdzg80","author":{"id":"9nbvjt5wugo","name":"Zana Horia"},"image":"https://phantom-marca.unidadeditorial.es/61616361845e8bc4efeb2b3e5d5b4854/resize/660/f/webp/assets/multimedia/imagenes/2023/09/05/16939288675740.jpg","text":"Hola, Zanahoria!","likes":[],"liked":false,"fav":false}]


CASE "non-existing user id"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 1g6al6ee05pc999999' \
-v


# CASE non-existing user id
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > GET /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer 1g6al6ee05pc999999
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Thu, 21 Dec 2023 05:34:11 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5