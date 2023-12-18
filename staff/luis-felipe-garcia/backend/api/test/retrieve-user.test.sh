source pepetest.sh

TEST "retrieve-user"

CASE "success on correct user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 7hyl6aor59s0' \
-v





CASE "fails on non-existing user id"

curl 'http://localhost:8000/users' \
-H 'Authorization: Bearer 7hyl6aor5999' \
-v