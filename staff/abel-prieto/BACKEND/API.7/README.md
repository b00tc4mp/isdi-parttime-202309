# API

## Register user

Request: POST /users "Content-Type: application/json" { name, email, password }
Response: 201
Response (error) : 400 "Content-Type: application/json" { error, message }

## Authenticate user

Request: POST /users/auth "Content-Type: application/json" { email, password }
Response: 200 application/json 'userId'
Response (error) : 400 "Content-Type: application/json" { error, message }

## Retrieve user

Request: GET /users "Authorization: Bearer userId"
Response: 200 "Content-Type: application/json { name }
Response (error) : 400 "Content-Type: application/json" { error, message }

## Change Email

Request: POST /users/email
Response: 200 "Content-Type: application/json { email, new email, password }
Response (error) : 400 "Content-Type: application/json" { error, message }

## Change Password

Request: POST /users/password
Response: 200 "Content-Type: application/json { email, password, new password }
Response (error) : 400 "Content-Type: application/json" { error, message }

## New post

Request: POST /newpost "Content-Type: application/json" { author, image, text }
Response: 201
Response (error) : 400 "Content-Type: application/json" { error, message }