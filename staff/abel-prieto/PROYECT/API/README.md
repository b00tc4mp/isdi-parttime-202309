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
- Request: GET /users Authorization: Bearer '65d0e63fa0232cfaf1c8c411'
- Response: 200 "Content-Type": application/json { username, [ group ] } 
- Response (error) : 500|404|406 "Content-Type": application/json { error, message }

