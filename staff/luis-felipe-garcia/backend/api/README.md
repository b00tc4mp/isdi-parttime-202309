# API

## Register user

Request: POST /users "Content-Type: application/json" {name, email, password}
Response: 201 User registared
Response (error): 400 "Content-Type: application/json" {error.message}

## Authenticate user

Request POST /users/auth "Content-Type: application/json" {email, password}
Response: 200 "Content-Type: application/json" UserId
Response (error): 400 "Content-Type: application/json" {error.message}

## Retrieve user

Request GET /users "Content-Type: application/json" {userId}
Response: 200 "Content-Type: application/json" {name}
Response (error): 400 "Content-Type: application/json" {error.message}
