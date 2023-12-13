curl 'localhost:8000/register' \
-H 'Content-Type: aplication/json' \
-d '{ "name": "Bruce Wayne", "email": "nosoy@batman.com", "password": "1234" }' \
-v

# El -H 'Content-Type: aplication/json' sirve para indicar al servidor que lo que le manda en data es un tipo .json