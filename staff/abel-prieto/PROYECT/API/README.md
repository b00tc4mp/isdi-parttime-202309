## API - HIINIT v0.1

## USER REQUEST

`Register User` ✅

- Request: POST /users "Content-Type": application/json { name, email, password }
- Response: 201
- Response (error) : 500|409|406 "Content-Type: application/json" { error, message }

`Authenticate User` ✅

- Request: POST /users/auth "Content-Type": application/json { email, password }
- Response: 200 "Content-Type": application/json { userId }
- Respone (error): 500|404|406|409 "Content-Type": application/json { error, message }

`Retrieve User` ✅

- Request: GET /users Authorization: Bearer ${session.sessionUserId}
- Response: 200 "Content-Type": application/json { username, [ group ], [ role ] }
- Response (error) : 500|404|406 "Content-Type": application/json { error, message }

`Retrieve Guest` ✅

- Request: GET /users
- Response: 200 "Content-Type": application/json { username, [ group ], [ role ] }
- Response (error) : 500|404|406 "Content-Type": application/json { error, message }

`Upload Files` ⚠️

- Request: POST /upload Authorization: Bearer ${session.sessionUserId}
- Response: 201
- Response (error) : 500 "Content-Type": multipart/form-data { error, message }
