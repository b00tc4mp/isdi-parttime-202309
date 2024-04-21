echo TEST "create-recipe"

echo CASE "success on new recipe"

curl 'http://localhost:9000/recipes' \
-H 'Content-Type: application/json' \
-d '{ "name": "Iluminador en crema para maquillaje", "description": "Nos encantan las recetas de maquillaje y más si son para iluminar nuestro rostro de forma natural. Hoy te queremos mostrar cómo hacer un iluminador en crema de una forma fácil y sencilla, ideal para resaltar y complementar nuestro maquillaje. ", "image": "https://img.girlstalk.cc/images/media/uploads/2020/02/05/2020-02-05-32945.jpg", "products": ["65e755fd2cf4b0b781075ed3", "65e7086d656bde907fbcadc4"], "type": "Make-up" }' \
-v

# TEST create-recipe
# CASE success on new recipe
# * processing: http://localhost:9000/recipes
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > POST /recipes HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 490
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Tue, 05 Mar 2024 19:54:25 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0