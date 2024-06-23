#!/bin/bash

## TEST 'create-resource'

# CASE 'passes for new resource created (activity)'
curl 'http://localhost:9000/resources' \
-H 'Content-Type: application/json' \
-d '{ "title": "Taller de prevención del acoso 2",
      "description": "Charlas de 22 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar",
      "resourceType": "activity",
      "topic": ["bullying", "diversidad cultural"],
      "image": "https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png",
      "link": "https://www.anar.org/colegios-e-institutos/"
    }' \
-v

# CASE 'passes for new resource created (book)'
curl 'http://localhost:9000/resources' \
-H 'Content-Type: application/json' \
-d '{ "title": "Por cuatro esquinitas de nada",
      "description": "Un cuadrado nunca va a dejar de ser un cuadrado, por mucho que intenten cambiarlo los circulitos. Una historia de aceptación e inclusión",
      "resourceType": "book",
      "topic": ["diversidad funcional", "diversidad cultural", "lgtb+"],
      "author": "Jerome Ruillier",
      "image": "https://www.editorialjuventud.es/wp-content/uploads/cover-por-cuatro-esquinitas.jpg",
      "ageRange": ["infantil", "5-6"]
    }' \
-v


# CASE 'fails on already existing resource'

curl 'http://localhost:9000/resources' \
-H 'Content-Type: application/json' \
-d '{ "title": "Taller de prevención del acoso 2",
      "description": "Charlas de 22 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar",
      "resourceType": "activity",
      "topic": ["bullying", "diversidad cultural"],
      "image": "https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png",
      "link": "https://www.anar.org/colegios-e-institutos/"
    }' \
-v

# CASE 'fails on missing required field for all resources (resourceType)'

curl 'http://localhost:9000/resources' \
-H 'Content-Type: application/json' \
-d '{ "title": "Por cuatro esquinitas de nada",
       "description": "Cuadradito quiere jugar en casa de sus amigos Redonditos, pero no pasa por la puerta porque? ¡La puerta es redonda como sus amigos! ¡Tendremos que recortarte las esquinas! le dicen los redonditos. ¡Oh, no! dice Cuadradito ¡Me dolería mucho! ¿Qué podemos hacer? Cuadradito es diferente. Nunca será redondo.",
       "topic": ["diversidad funcional", "diversidad cultural", "lgtb+"],
       "author": "Jerome Ruillier",
       "image": "https://www.editorialjuventud.es/wp-content/uploads/cover-por-cuatro-esquinitas.jpg"
     }' \
-v

# CASE 'fails on missing required field for that particular type of resource (ageRange)'

curl 'http://localhost:9000/resources' \
-H 'Content-Type: application/json' \
-d '{ "title": "Por cuatro esquinitas de nada2",
       "description": "Cuadradito quiere jugar en casa de sus amigos Redonditos, pero no pasa por la puerta porque? ¡La puerta es redonda como sus amigos! ¡Tendremos que recortarte las esquinas! le dicen los redonditos. ¡Oh, no! dice Cuadradito ¡Me dolería mucho! ¿Qué podemos hacer? Cuadradito es diferente. Nunca será redondo.",
       "resourceType": "book",
       "topic": ["diversidad funcional", "diversidad cultural", "lgtb+"],
       "author": "Jerome Ruillier",
       "image": "https://www.editorialjuventud.es/wp-content/uploads/cover-por-cuatro-esquinitas.jpg"
     }' \
-v