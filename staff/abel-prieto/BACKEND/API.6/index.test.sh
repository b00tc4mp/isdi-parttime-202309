# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json
# El -d indica al servidor el tipo de dato que está enviando el cliente
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor

# curl 'http://localhost:8000/register' \
# -H 'Content-Type: application/json' \
# -d '{ "name": "Bruce Wayne", "email": "nosoy@batman.com", "password": "1234" }' \
# -v

# curl 'http://localhost:8000/login' \
# -H 'Content-Type: application/json' \
# -d '{ "email": "nosoy@batman.com", "password": "1234" }' \
# -v

curl 'http://localhost:8000/newpost' \
-H 'Content-Type: application/json' \
-d '{ "author": "24dlukpa1skg", "image": "https://elcorreoweb.es/documents/10157/0/image_content_18563891_20161222114201.jpg", "text": "soy Batman!" }' \
-v
