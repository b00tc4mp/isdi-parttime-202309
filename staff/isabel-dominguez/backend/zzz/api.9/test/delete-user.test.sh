echo TEST "delete-user"

echo CASE "delete user is correct"

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./test/retrieve-user.test.sh

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 53emvhzdbtw0' \
-H 'Content-Type: application/json' \
-X DELETE \
-d '{ "userId": "5gbocg2tsfs0", "password": "123123123" }' \
-v

# > DELETE /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 53emvhzdbtw0
# > Content-Type: application/json
# > Content-Length: 53

# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 64
# < ETag: W/"40-kCeF+dfgX7DYwGPW6E3OKJlJMHU"
# < Date: Sun, 17 Dec 2023 17:03:38 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"message":"User deleted successfully.","userId":"53emvhzdbtw0"}* 

echo CASE "delete user with other ID"

# > DELETE /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 53emvhzdbtw0
# > Content-Type: application/json
# > Content-Length: 53

# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sun, 17 Dec 2023 17:09:39 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5

# {"error":"Error","message":"user not found"}*