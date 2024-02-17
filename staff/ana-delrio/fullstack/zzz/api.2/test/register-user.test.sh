source pepetest.sh 

TEST "register-user"

CASE "success on new user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name":"Ana delRio", "email": "anadel@gmail.com", "password": "123123123" }
' \
-v

# # versión del protocolo
# > POST /users HTTP/1.1
# # indica el nombre de dominio y el puerto del servidor al que se está haciendo la solicitud
# > Host: localhost:8000
# # identifica el agente de usuario que realiza la solicitud (en este caso, curl versión 8.1.2).
# > User-Agent: curl/8.1.2
# # Especifica los tipos de contenido que el cliente puede recibirv
# > Accept: */*
# # Indica el tipo de contenido del cuerpo de la solicitud (en este caso, application/json).
# > Content-Type: application/json
# # Indica la longitud del cuerpo de la solicitud en bytes.
# > Content-Length: 72


# < HTTP/1.1 201 Created
# # Indica la tecnología que impulsa el servidor (en este caso, Express).
# < X-Powered-By: Express
# # La fecha y hora en que se generó la respuesta.
# < Date: Tue, 12 Dec 2023 20:30:46 GMT
# # Establece la política de conexión entre el cliente y el servidor (en este caso, keep-alive).
# < Connection: keep-alive
# # Configuración relacionada con mantener la conexión abierta durante un período de tiempo específico.
# < Keep-Alive: timeout=5
# # La longitud del cuerpo de la respuesta en bytes (en este caso, 0 porque no hay contenido en el cuerpo)
# < Content-Length: 0


CASE "fail on already existing user"

curl 'http://localhost:8000/users' \
-H 'Content-Type: application/json' \
-d '{ "name":"Ana delRio", "email": "anadel@gmail.com", "password": "123123123" }
' \
-v

# CASE fail on already existing user
# *   Trying 127.0.0.1:8000...
# * Connected to localhost (127.0.0.1) port 8000 (#0)
# > POST /users HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/7.88.1
# > Accept: */*
# > Content-Type: application/json
# > Content-Length: 78
# > 
# < HTTP/1.1 400 Bad Request
# < X-Powered-By: Express
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 49
# < ETag: W/"31-9YH7vKZZOanka1kAQTVWdLRn9j0"
# < Date: Sat, 16 Dec 2023 11:38:40 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"error":"Error","message":"user already exists"}% 