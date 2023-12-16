curl 'http://127.0.0.1:8000' -v

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309 (feature/backend)
# $ cd staff/isabel-dominguez/backend/api

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ chmod -X index.test.sh

# isabe@Amyyluna MINGW64 ~/workspace/isdi-parttime-202309/staff/isabel-dominguez/backend/api (feature/backend)
# $ ./index.test.sh

# > GET / HTTP/1.1
# > Host: 127.0.0.1:8000
# > User-Agent: curl/8.2.1
# > Accept: */*

# < HTTP/1.1 200 OK
# < Content-Type: application/json
# < Date: Sat, 16 Dec 2023 10:20:04 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Transfer-Encoding: chunked

# {"data":"Hello World!"}