curl 'http://127.0.0.1:8000' -v

# #request
# > GET / HTTP/1.1
# > Host: 127.0.0.1:8000
# > User-Agent: curl/8.4.0
# > Accept: */*
# > 

# #response
# < HTTP/1.1 200 OK
# < Content-Type: text/html
# < Date: Fri, 12 Jan 2024 17:06:31 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Transfer-Encoding: chunked
# < 
# * Connection #0 to host 127.0.0.1 left intact
# <html><head><title>Hola mundo</title></head><body><h1>hello world</h1></body></html>%   %                                                                                                                                                                                                        