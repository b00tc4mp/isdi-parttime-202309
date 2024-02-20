<!-- TEST DRIVEN DESIGN (TDD) -->

# API

## Register user

- Request: POST /users "Content-Type: application/json { name, email, password }
- Response: 201
- Response (error): 400|409|500 "Content-Type: application.json" {error, message}

## Authenticate user

- Request: POST /users/auth "Content-Type: application/json {email, password}<!-- "Se pone POST porque estamos indicando nuestros datos a la API, por lo que necesitamos que esta informacion no se refleje en el header y se envíe en el body -->
- Response: 200 "Content-Type: application/json userId
- Response (error): 400 application/json { error, message }

## Retrieve user

- Request: GET /users "Authorization: Bearer userId"
- Response: 200 "Content-Type: application/json" { name }
- Response (error): 400 application/json { error, message }

## Retrieve posts

- Request: GET /posts "Authorization: Bearer userId" <!-- "Se utiliza GET porque estamos pidiendo a la API datos" -->
- Request: 200 "Content-Type: application/json" [{ id, author: { id, name }, image, text, likes, liked, fav }]
- Request (error): 400|401|404|406|500 <!--"el error (406), indica que el servidor no puede proporcionar una respuesta en formato JSON". -->

## Create post

<!-- (⭐Authorization, se utiliza cuando eres usuario "te has logueado"
el userId, deberiamos protegerlo con una firma digital.) -->

- Request: POST /posts "Authorization: Bearer userId" "Content-Type: application/json" { image, text }
- Response: 201
- Response (error): 400 "Content-Type: application/json" { error, message }

## toggle like post

- Request: PATCH /posts/postId/likes "Authorization: Bearer userId"
- Response: 204
- Response (error): 400|404|406|500 "Constent-Type: application/json" { error, message }
