source pepetest.sh

TEST "create-post"

CASE "success on new post"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65959e2a7eff18b095527371' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://img.freepik.com/vector-premium/ilustracion-chocolate-saliendo-envoltura_498928-124.jpg", "text": "Mejor el Banano"}' \
-v

