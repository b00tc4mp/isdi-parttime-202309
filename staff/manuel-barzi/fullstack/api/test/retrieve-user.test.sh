source pepetest.sh

TEST "retrieve-user"

CASE "success on correct token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFlYzdkM2I3NGY0YTUyYWNlZWRkNjUiLCJpYXQiOjE3MDYxMjY4MjJ9.u_ZvHObaiIJICa6wU32Fs_qfIn41zT4g8GbQ32jWHq4' \
-v

CASE "fails on corrupted token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWIwMTYxMDdkYzE3MjhjZTAzZDJmNGUiLCJpYXQiOjE3MDYxMjY4MjJ9.u_ZvHObaiIJICa6wU32Fs_qfIn41zT4g8GbQ32jWHq4' \
-v

CASE "fails on token expired"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFlYzdkM2I3NGY0YTUyYWNlZWRkNjUiLCJpYXQiOjE3MDYxMjc5NjIsImV4cCI6MTcwNjEyNzk2M30.BGdfHZvWSTmfQWNvOZaK4O5zuZfP6mwKP0BZ8pY_RQ8' \
-v


