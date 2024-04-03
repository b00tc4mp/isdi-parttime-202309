TEST 'create-activity'

CASE 'passes for new activity created'

curl 'http://localhost:9000/activities' \
-H 'Content-Type: application/json' \
-d '{ "title": "Taller de prevención del acoso 2",
      "description": "Charlas de 22 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar",
      "image": "https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png",
      "link": "https://www.anar.org/colegios-e-institutos/"
    }' \
-v

CASE 'fails on already existing activity'

curl 'http://localhost:9000/activities' \
-H 'Content-Type: application/json' \
-d '{ "title": "Taller de prevención del acoso 2",
       "description": "Charlas de 22 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar",
       "image": "https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png",
       "link": "https://www.anar.org/colegios-e-institutos/"}' \
-v

CASE 'fails on missing field'

curl 'http://localhost:9000/activities' \
-H 'Content-Type: application/json' \
-d '{ "title": "Taller de prevención del acoso 2",
       "description": "Charlas de 22 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar",
       "image": "https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png",
       "link": "https://www.anar.org/colegios-e-institutos/"}' \
-v