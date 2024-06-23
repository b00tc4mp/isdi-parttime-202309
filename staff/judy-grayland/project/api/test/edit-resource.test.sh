TEST 'edit-resource'

CASE 'passes for resource edited'

curl 'http://localhost:9000/resources/6645f479c04e170db038d1bc' \
-H 'Content-Type: application/json' \
-X PATCH \
-d '{ "id":"6645f479c04e170db038d1bc", 
    "newData": {
        "title": "Libro 6000",
        "description": "Libro description"
        }
    }' \


