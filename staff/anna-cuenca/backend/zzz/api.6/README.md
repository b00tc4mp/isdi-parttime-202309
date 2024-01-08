# API

## Register user

Request: POST /users "Content-Type:  -H application/json { name, email, password }
Response: 201


## Authenticate user

Request: POST /users "Content-Type:  -H application/json { email, password }
Response: 200 application/json userId
Response (error): 400 application/json {error, message}

## Retrieve user

Request: GET /users "Autohorization: Bearer userId" //le enviaremos nuestro id de usuario y el servidor nos devolverá el usuario
Response: 200 "Content-Type: application/json { name }
