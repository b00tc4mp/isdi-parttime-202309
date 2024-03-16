TEST 'authenticate-user'

CASE 'user correctly authenticated'

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "bluey@school.com", "password": "123456789" }' \
-v

CASE 'fails on user not found'

curl 'http://localhost:9000/users/auth' \
-H 'Content-Type: application/json' \
-d '{ "email": "wonka@school.com", "password": "123456789" }' \
-v