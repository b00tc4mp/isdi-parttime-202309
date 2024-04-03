TEST 'create-activity'

CASE 'passes for new activity created'

curl 'http://localhost:9000/activities' \
-H 'Content-Type: application/json' \
-d '{ "title": "Taller de prevención del acoso 2",
       "description": "Charlas de 22 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar",
        "image": "https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png",
        "link": "https://www.anar.org/colegios-e-institutos/"}' \
-v

# POST /users HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 80
# > 
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Tue, 27 Feb 2024 16:54:06 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

# CASE 'fails on already existing activity'

# curl 'http://localhost:9000/users' \
# -H 'Content-Type: application/json' \
# -d '{ "name": "Willy Wonka School", "email": "willywonka@school.com", "password": "123456789" }' \
# -v