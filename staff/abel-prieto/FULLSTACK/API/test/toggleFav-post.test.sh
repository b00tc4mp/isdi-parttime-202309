# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json (cabecera)
# El -v sirve para indicar en consola los procesos que estánocurriendo en el servidor
# Si no especificamos ningun -d (Dato) el servidor ya sabe que se trata de un GET y no un POST
# Con el -X 'PATCH' le indica al servidor que se trata de un método patch

# source pepetest.sh

blue='\033[0;34m'
green='\033[0;32m'
tomato='\033[1;31m'

reset='\033[0m'

echo -e "${blue}TEST TOGGLE FAV POST${reset}\n"

echo -e "${green}CASE Add fav on post with user id${reset}\n"

curl 'http://localhost:8000/users/2b4bwcqo9ps0/favs' \
-H 'Authorization: Bearer 2ytu1zjsl2u0' \
-X PATCH \
-v