# API

## Register user

Request: POST/users "Content-Type: application/json" {name, email, password}
Response: 201

## Authenticate user

Request: POST/auth "Content-Type: application/json" {email, password}
Response: 200 application/json userId

## Retrieve user

Request: GET /users "Authorization: Bearer userId"
Response: 200 "Content-Type: application/json"{error, message}