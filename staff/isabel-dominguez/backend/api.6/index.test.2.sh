curl 'http://localhost:8000/register?name=Pepito+Grillo&email=pepito@grillo.com&password=123123123' -v

# > GET /register?name=Pepito+Grillo&email=pepito@grillo.com&password=123123123 HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Sat, 16 Dec 2023 11:25:52 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
