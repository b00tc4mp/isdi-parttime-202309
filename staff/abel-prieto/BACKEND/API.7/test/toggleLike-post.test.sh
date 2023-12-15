# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json (cabecera)
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor
# Si no especificamos ningun -d (Dato) el servidor ya sabe que se trata de un GET y no un POST
# Con el -X 'PATCH' le indica al servidor que se trata de un método patch

source pepetest.sh

TEST "TOGGLE LIKE POST"

CASE "Add like on post with user id"

curl 'http://localhost:8000/newpost/18ge8esdqgww/likes' \
-H 'Authorization: Bearer 24dlukpa1skg' \
-X PATCH \
-v

