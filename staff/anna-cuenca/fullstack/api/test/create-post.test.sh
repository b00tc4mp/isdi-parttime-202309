source pepetest.sh

TEST "create-post"

CASE "success on new post"

curl 'http://localhost:9000/posts' \
-H 'Authorization: Bearer 65afdf535c84b191db2dad5b' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://img.freepik.com/vector-premium/lechuga-dibujos-animados_665280-48650.jpg?w=2000", "text": "Green"}' \
-v

