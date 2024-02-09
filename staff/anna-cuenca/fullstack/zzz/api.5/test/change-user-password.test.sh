source pepetest.sh

TEST "change-user-password"

CASE "success on correct data"

curl 'http://localhost:8000/users/65944ed178f044ee3aece02b/password' \
-H 'Authorization: Bearer 65944ed178f044ee3aece02b' \
-H 'Content-Type: application/json' \
-d '{ "password": "111", "newPassword": "000", "repeatNewPassword": "000"}' \
-X PATCH \
-v
