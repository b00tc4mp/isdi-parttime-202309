# API

## Register user

Request: POST /users "Content-Type: application/json" { name, email, password }
Response: 201
Response (error): 400|409|500|406 "Content-Type: application/json" { error, message }

## Authenticate user

Request: POST /users/auth "Content-Type: application/json" { email, password }
Response: 200 "Content-Type: application/json" userId
Response (error): 400|409|500|406|404 "Content-Type: application/json" { error, message }

## Retrieve user

Request: GET /users "Authorization: Bearer userId"
Response: 200 "Content-Type: application/json" { name }
Response (error): 400|406|404 "Content-Type: application/json" { error, message }

## Create post

Request: POST /posts "Authorization: Bearer userId" "Content-type: application/json" { image, text }
Response: 201
Response (error): 400|406|404 "Content-Type: application/json" { error, message }

## Toggle like post

Request: PATCH /posts/postId/likes "Authorization: Bearer userId"
Response: 204
Response (error): 400|404|406|500 "Content-Type: application/json" { error, message }

## Change email user

Request: POST /users/email "Authorization: Bearer userId" "Content-type: application/json" { userId, email, newEmail, confirmNewEmail }
Response: 200
Response (error): 400|404|406|409|500 "Content-Type: application/json" { error, message }

## Change password user

Request: POST /users/password "Authorization: Bearer userId" "Content-type: application/json" { userId, password, newPassword, confirmNewPassword }
Response: 200
Response (error): 400|404|406|409|500 "Content-Type: application/json" { error, message }

## Delete user

Request: DELETE /users "Authorization: Bearer userId" "Content-type: application/json" { userId, password }
Response: 200
Response (error): 400|404|406|500 "Content-Type: application/json" { error, message }

## Delete post

Request: DELETE /posts/:postId "Authorization: Bearer userId" "Content-type: application/json" { postId }
Response: 200
Response (error): 400|404|406|500 "Content-Type: application/json" { error, message }

## Toggle fav post

Request: PATCH /posts/:postId/favs "Authorization: Bearer userId"
Response: 204
Response (error): 400|404|406|500 "Content-Type: application/json" { error, message }

## Retrieve post

Request: GET /posts "Authorization: Bearer userId"
Response: 200 "Content-Type: application/json" [{ id, author: { id, name }, image, text, likes, liked, fav }]
Response (error): 400|406|404 "Content-Type: application/json" { error, message }