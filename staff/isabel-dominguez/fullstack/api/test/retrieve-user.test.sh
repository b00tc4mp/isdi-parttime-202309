echo TEST "retrieve-user"

echo CASE "success on correct user id"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer 65aec7d3b74f4a52aceedd65' \
-v

