# API

## Register user

```sh
$ curl 'http://localhost:8000/register' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

# versión del protocolo
> POST /register HTTP/1.1
# indica el nombre de dominio y el puerto del servidor al que se está haciendo la solicitud
> Host: localhost:8000
# identifica el agente de usuario que realiza la solicitud (en este caso, curl versión 8.1.2).
> User-Agent: curl/8.1.2
# Especifica los tipos de contenido que el cliente puede recibirv
> Accept: */*
# Indica el tipo de contenido del cuerpo de la solicitud (en este caso, application/json).
> Content-Type: application/json
# Indica la longitud del cuerpo de la solicitud en bytes.
> Content-Length: 72


< HTTP/1.1 201 Created
# Indica la tecnología que impulsa el servidor (en este caso, Express).
< X-Powered-By: Express
# La fecha y hora en que se generó la respuesta.
< Date: Tue, 12 Dec 2023 20:30:46 GMT
# Establece la política de conexión entre el cliente y el servidor (en este caso, keep-alive).
< Connection: keep-alive
# Configuración relacionada con mantener la conexión abierta durante un período de tiempo específico.
< Keep-Alive: timeout=5
# La longitud del cuerpo de la respuesta en bytes (en este caso, 0 porque no hay contenido en el cuerpo)
< Content-Length: 0
```