# API - HIINIT v0.1

## GUEST REQUEST

`Retrieve Guest` ✅
- Request: GET /guest
- Response: 200 "Content-Type": application/json { username, [ group ], [ role ] }
- Response (error) : 500|404|406 "Content-Type": application/json { error, message }

## USER REQUEST

`Register User` ✅
- Request: POST /users "Content-Type": application/json { name, email, password }
- Response: 201
- Response (error) : 500|409|406 "Content-Type": application/json" { error, message }

`Authenticate User` ✅
- Request: POST /users/auth "Content-Type": application/json { email, password }
- Response: 200 "Content-Type": application/json { userId }
- Respone (error): 500|404|406|409 "Content-Type": application/json { error, message }

`Retrieve User` ✅
- Request: GET /users Authorization: Bearer ${session.token}
- Response: 200 "Content-Type": application/json { username, [ group ], [ role ] }
- Response (error) : 500|404|406 "Content-Type": application/json { error, message }

`Change Email` ✅
- Request: PATCH /users/email Authorization: Bearer ${session.token}
- Response: 200
- Response (error) : 500|404|406|409 "Content-Type": application/json { error, message }

`Change Password` ✅
- Request: PATCH /users/password Authorization: Bearer ${session.token}
- Response: 200
- Response (error) : 500|404|406|409 "Content-Type": application/json { error, message }

`Upload Files` ✅
- Request: POST /upload "Contet-Type": multipart/form-data Authorization: Bearer ${session.token}
- Response: 201
- Response (error) : 500|404|406|409 "Content-Type": multipart/form-data { error, message }

`Retrieve Files` ✅
- Request: GET /download Authorization: Bearer ${session.token}
- Response: 200 "Content-Type": application/json { filename, filetype }
- Respose (error): 500 "Content-Type": application/json { error, message }

`Download Files` 
- Request: GET /download/:fileId Authorization: Bearer ${session.token}
- Response: 201
- Response (error) : 500|404|406|409 "Content-Type": multipart/form-data { error, message }

`Delete Files` ✅
- Request: GET /download/delete/:fileId Authorization: Bearer ${session.token}
- Response: 201
- Response (error) : 500|404|406|409 "Content-Type": multipart/form-data { error, message }

`Retrieve Commands` ✅
- Request: GET /* Authorization: Bearer ${session.token}
- Response: 200 "Content-Type": application/json { command_NAME }
- Respose (error): 500 "Content-Type": application/json { error, message }

## ADMIN

`Register Admin` 
- Request: POST /admin "Content-Type": application/json { name, email, password, group: 'root', role: 'admin' }
- Response: 201
- Response (error) : 500|409|406|401 "Content-Type": application/json { error, message } 

`Delete User` 
- Request: DELETE /users/:userId Authorization: Bearer ${session.token}
- Response: 200 
- Response (error): 500|404|406|401 "Content-Type": application/json { error, message }