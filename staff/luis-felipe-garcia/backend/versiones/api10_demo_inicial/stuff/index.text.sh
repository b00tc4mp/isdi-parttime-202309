#curl 'http://127.0.0.1:8000' -v


# *   Trying 127.0.0.1:8000...
#* Connected to 127.0.0.1 (127.0.0.1) port 8000 (#0)
#> GET / HTTP/1.1
#> Host: 127.0.0.1:8000
#> User-Agent: curl/8.1.2
#> Accept: */*
#> 
#< HTTP/1.1 200 OK
#< Content-Type: application/json
#< Date: Wed, 13 Dec 2023 10:16:31 GMT
#< Connection: keep-alive
#< Keep-Alive: timeout=5
#< Transfer-Encoding: chunked
#< 
#* Connection #0 to host 127.0.0.1 left intact
#{"data":"Hello World"}%                          
#(base) lf@MacBook-Pro-de-Luis api % 

curl http://localhost:8000/register?name=Pepito+Grillo&email=pepito@grillo.com&password=123123123 -v