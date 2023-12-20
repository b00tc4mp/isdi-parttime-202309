#curl 'http://localhost:8000/register' \
#-H 'Content-Type: application/json' \
#-d '{"name": "Tom Ate con POST", "email": "tom@ate.com", "password": "123123123" }' \
#-v

curl 'http://localhost:8000/login' \
-H 'Content-Type: application/json' \
-d '{"email": "tom@ate.com", "password": "123123123" }' \
-v