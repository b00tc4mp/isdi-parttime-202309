# ya no enviamos los datos en la url, sino en el body como un json
# tenemos que poner el content type en el comando -H para indicar que es un json. sino, el jsonbodyparser no sabe que tiene que actuar

curl 'http://localhost:8000/register' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# Las flechas vacías representan el body (curl no indica qué hay dentro de ese body). El content-length nos indica el número de caracteres dentro del body

# POST /register HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 72
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Sat, 13 Jan 2024 07:29:13 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# < 

                                                                                                 