# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json (cabecera)
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor
# Si no especificamos ningun -d (Dato) el servidor ya sabe que se trata de un GET y no un POST

source pepetest.sh

TEST "RETRIEVE USER"

CASE "Retrieve user succesfully on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 24dlukpa1skg' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 24dlukpa1skg     
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 42
# < ETag: W/"2a-9YJdasQaEgyqjWK5Teqz1S9kE7k"
# < Date: Thu, 14 Dec 2023 17:29:26 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"id":"24dlukpa1skg","name":"Bruce Wayne"}
