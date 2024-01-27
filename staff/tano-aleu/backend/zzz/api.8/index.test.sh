curl 'http://localhost:8000/register' \
-H 'Content-Type: application/json' \
-d '{ "name": "Man Zana", "email": "man@zana.com", "password": "123123123" }' \
-v

## POST -> AQUI EL ENVIO DE DATOS SE HACE ENMASCARADO Y SE ENVIA EN FORMATO JSON (STRING) 