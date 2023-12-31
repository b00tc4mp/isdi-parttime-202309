# API v0.0

## Register User ✅

- Request: POST /users "Content-Type: application/json" { name, email, password }
- Response: 201
- Response (error) : 400 "Content-Type: application/json" { error, message }

## Authenticate User ✅

- Request: POST /users/auth "Content-Type: application/json" { email, password }
- Response: 200 application/json 'userId'
- Response (error) : 400 "Content-Type: application/json" { error, message }

## Retrieve User ✅

- Request: GET /users "Authorization: Bearer userId"
- Response: 200 "Content-Type: application/json { name }
- Response (error) : 400 "Content-Type: application/json" { error, message }

## Change Email ✅

- Request: PATCH /users/email "Authorization: Bearer userId"
- Response: 200 "Content-Type: application/json { new email, again new email, password }
- Response (error) : 400 "Content-Type: application/json" { error, message }

## Change Password ✅

- Request: PATCH /users/password "Authorization: Bearer userId"
- Response: 200 "Content-Type: application/json { password, new password, again new password }
- Response (error) : 400 "Content-Type: application/json" { error, message }

## Create Post ✅

- Request: POST /newpost "Authorization: Bearer userId" "Content-Type: application/json" { image, text }
- Response: 201
- Response (error) : 400 "Content-Type: application/json" { error, message }

## Retrieve Posts ✅

- Request: 'GET' /newpost "Authorization: Bearer userId" 
- Response: 200 "Content-Type: application/json" [ { id, author: { id, name, email }, image, text, likes, liked, fav } ]
- Reponse (error) : 400 "Content-Type: application/json" { error, message }

## Retrieve Favs ✅

- Request: 'GET' /users "Authorization: Bearer postId"
- Response: 200 "Content-Type: application/json" [ { id, author, image, text, likes } ]
- Response (error): 400 "Content-Type: application/json" { error, message }

## Toggle Like ✅

- Request: PATCH /newpost/:postId/likes "Authorization: Bearer userId"
- Response: 204 
- Response (error) : 400|404|406|500 "Content-Type: application/json" { error, message }

## Toggle Fav ✅

- Request: PATCH /users/:userId/favs "Authorization: Bearer postId"
- Response: 204
- Response (error): 400|404|406|500 "Content-Type: application/json" { error, message }

## Delete Post

- Request: DELETE /users/:userId/favs "Authorization: Bearer postId"
- Response: 204 
- Response (error): 400|404|406|500 "Content-Type: application/json" { error, message }