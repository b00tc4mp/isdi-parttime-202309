echo TEST "retrieve-recipe-by-id"

echo CASE "success on correct"

curl 'http://localhost:9000/recipe/65f74087896c67714c05e816' \
-v

# TEST retrieve-recipe-by-id
# CASE success on correct
# * processing: http://localhost:9000/recipe/65f74087896c67714c05e816
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /recipe/65f74087896c67714c05e816 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 590
# < ETag: W/"24e-uYH0hHseGOJXuT0WYZ+9w8G9m4o"
# < Date: Tue, 02 Apr 2024 17:48:05 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"_id":"65f74087896c67714c05e816","name":"Aceite para masajes","description":"Desinfecta primero todos los utensilios que vayas a utilizar. Esto lo haces pulverizando alcohol sobre ellos y dejándolos secar.\nAñade todos los ingredientes, uno a uno, en un recipiente y mezclar.\n¡Envasa y listo! Ya puedes disfrutar de tu champú seco.","image":"https://5.imimg.com/data5/SELLER/Default/2022/11/IO/HK/EI/2821926/clove-oil-500x500.jpg","products":["65e707e5ffe20bd307fe39f4","65e708dbcdf01598022fe0ad","65e7071ee2e93c526809e1b3"],"type":"Treatment","__v":0,"id":"65f74087896c67714c05e816"}*