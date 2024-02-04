source pepetest.sh

TEST "retrieve-fav-posts"

CASE "success"

curl 'http://localhost:8000/users/amhkljhnhc4/favs' \
-H 'Authorization: Bearer amhkljhnhc4' \
-v

#-H 'Content-Type: application/json' \
#-d '{"userId": "amhkljhnhc4"}' \

