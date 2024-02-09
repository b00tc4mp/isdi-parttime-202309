source pepetest.sh

TEST "change-user-email"

CASE "success on correct data"

curl 'http://localhost:8000/users/65959e2a7eff18b095527371/email' \
-H 'Authorization: Bearer 65959e2a7eff18b095527371' \
-H 'Content-Type: application/json' \
-d '{ "email": "plata@nito.com", "newEmail": "platano@frito.com", "repeatNewEmail": "platano@frito.com"}' \
-X PATCH \
-v

