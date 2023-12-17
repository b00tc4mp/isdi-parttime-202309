source pepetest.sh

TEST "create-post"

CASE "success on correct data"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 3vxs04m50tk0' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lechuga-dibujada-mano_23-2150700533.jpg", "text": "Hi there"}' \
-v