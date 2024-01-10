source pepetest.sh

TEST "toggle-fav-post"

CASE "success"

curl 'http://localhost:8000/users/amhkljhnhc4/favs' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "postId": "40ga0cl8bd00" }' \
-X PATCH \
-v


# CASE success FAV A POST
# TEST toggle-fav-post


# CASE success 
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/amhkljhnhc4/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 28
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Wed, 27 Dec 2023 08:06:00 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

#  {
#         "id": "amhkljhnhc4",
#         "name": "Cala Bacin",
#         "email": "FETCHcala@bacin.com",
#         "password": "NEWPASSCHANGED",
#         "favs": [
#             "40ga0cl8bd00"
#         ]
#     },



# CASE success UNFAV A POST
curl 'http://localhost:8000/users/amhkljhnhc4/favs' \
-H 'Authorization: Bearer amhkljhnhc4' \
-H 'Content-Type: application/json' \
-d '{ "postId": "40ga0cl8bd00" }' \
-X PATCH \
-v


# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > PATCH /users/amhkljhnhc4/favs HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.1.2
# > Accept: */*
# > Authorization: Bearer amhkljhnhc4
# > Content-Type: application/json
# > Content-Length: 28
# > 
# < HTTP/1.1 204 No Content
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Access-Control-Allow-Headers: *
# < Access-Control-Allow-Methods: *
# < Date: Wed, 27 Dec 2023 08:08:19 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
#  {
#         "id": "amhkljhnhc4",
#         "name": "Cala Bacin",
#         "email": "FETCHcala@bacin.com",
#         "password": "NEWPASSCHANGED",
#         "favs": []
#     },