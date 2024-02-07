source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFmZGY1MzVjODRiMTkxZGIyZGFkNWIiLCJpYXQiOjE3MDYzODEwNjZ9.q7KPqCtxeOmWU5iT18Z7izigIDSwIgZxjoagbp8IOGo' \
-v

# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer 69d4ph8zzj00
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 23
# < ETag: W/"17-r+/1rUFCU8BRAwzIjoOLO3OBHlo"
# < Date: Sat, 16 Dec 2023 22:52:03 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"name":"Patata Frita"}

CASE "fails on corrupted token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFmZGY1MzVjODRiMTkxZGIyZGFkNWIiLCJpYXQiOjE3MDYzODMyMzEsImV4cCI6MTcwNjM4MzIzMn0.g11GT2TQer6c7sHUvpcVsAfpaGrIOyFv_Rtk7vv5w_0' \
-v


# > GET /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.79.1
# > Accept: */*
# > Authorization: Bearer 69d4ph8zzj01
# > 
# * Mark bundle as not supporting multiuse
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 44
# < ETag: W/"2c-DA3KcjMxbAqH25TOBQigpuC1Bjs"
# < Date: Sat, 16 Dec 2023 22:53:22 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# {"error":"Error","message":"user not found"}%  

CASE "fails on expirated token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFmZGY1MzVjODRiMTkxZGIyZGFkNWIiLCJpYXQiOjE3MDYzODEwNjZ9.q7KPqCtxeOmWU5iT18Z7izigIDSwIgZxjoagbp8IOGo' \
-v