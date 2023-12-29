# curl 'http://127.0.0.1:8000' -v

# * Connected to 127.0.0.1 (127.0.0.1) port 8000 (#0)
# > GET / HTTP/1.1
# > Host: 127.0.0.1:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < Content-Type: application/json
# < Date: Thu, 14 Dec 2023 08:57:50 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Transfer-Encoding: chunked
# < 
# * Connection #0 to host 127.0.0.1 left intact
# {"data":"Hello World!"}% 