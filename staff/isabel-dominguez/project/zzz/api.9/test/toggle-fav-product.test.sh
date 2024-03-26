echo TEST "toggle-fav-product"

echo CASE "success on correct data"

curl 'http://localhost:9000/products/65e8683deadcfb1397d77890/favs' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N…UxMH0.8q350KLmF9myjc84-TiPIFiiAXjHPicz7lVHBFle4OQ' \
-X PATCH \
-v

