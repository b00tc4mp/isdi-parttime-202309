curl 'http://127.0.0.1:8000' -v

# #request
# > GET / HTTP/1.1
# > Host: 127.0.0.1:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > 
# #response
# < HTTP/1.1 200 OK
# < Content-Type: application/json
# < Date: Fri, 12 Jan 2024 15:56:28 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Transfer-Encoding: chunked
# < 
# * Connection #0 to host 127.0.0.1 left intact

# #response body: a JSON:
# {"data":"Hello World!"}%                                                                                                             