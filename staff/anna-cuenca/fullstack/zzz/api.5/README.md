# API

## Register user

- Request: POST /users "Content-Type:  -H application/json { name, email, password }
- Response: 201
- Response (error): 400|409|500 application/json {error, message}


## Authenticate user

- Request: POST /users "Content-Type:  -H application/json { email, password }
- Response: 200 application/json userId
- Response (error): 400|401 application/json {error, message}

## Retrieve user

- Request: GET /users "Autohorization: Bearer userId" //le enviaremos nuestro id de usuario y el servidor nos devolverá el usuario
- Response: 200 "Content-Type: application/json { name }
- Response (error): 400 application/json {error, message}

## Retrieve posts

- Request: GET /posts "Authorization: Bearer userId"
- Response: 200 "Content-Type: application/json" [{id, author: {id, name}, image, text, liked, fav}]
- Response (error): 400 application/json {error, message}

## Create post

- Request: POST /posts "Autohorization: Bearer userId" "Content-Type: H application/json { image, text }
- Response: 201 
- Response (error): 400 application/json {error, message}

## Toogle like post

- Request: PATCH /posts/postId/likes "Autohorization: Bearer userId"
- Response: 204 
- Response (error): 400|404|406|500 application/json {error, message}

## Toogle fav post

- Request: PATCH /users/userId/favs "Autohorization: Bearer userId"
- Response: 204 
- Response (error): 400|404|406|500 application/json {error, message}

## Change email User

- Request: PATCH /users/userId/email "Autohorization: Bearer userId" "Content-Type: H application/json { email, newEmail, repeatNewEmail }
- Response: 204 
- Response (error): 400|404|406|500 application/json {error, message}

## Change password User

- Request: PATCH /users/userId/password "Autohorization: Bearer userId" "Content-Type: H application/json { password, newPassword, repeatNewPassword }
- Response: 204 
- Response (error): 400|404|406|500 application/json {error, message}

## Edit Post Text

- Request: PATCH /posts/postId/text "Autohorization: Bearer userId" "Content-Type: H application/json { text}
- Response: 204 
- Response (error): 400|404|406|500 application/json {error, message}
