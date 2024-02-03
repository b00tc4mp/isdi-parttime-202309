source pepetest.sh

TEST "create-post"

CASE "success on new post"

curl 'http://localhost:9000/posts' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiZWVhN2NjYjI5ODY0YjgyYjlkYzQiLCJpYXQiOjE3MDY3NDA0NDMsImV4cCI6MTcwNjc0NDA0M30.Nb_I2-vc64nFxoKuZW44oO79csvkK0iG7SKiS_QUiQA' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://img.freepik.com/vector-premium/lechuga-dibujos-animados_665280-48650.jpg?w=2000", "text": "Para borrar"}' \
-v

