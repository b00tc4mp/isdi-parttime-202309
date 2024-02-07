source pepetest.sh

TEST "retrieve-user-posts"

CASE "success on correct user id"

curl 'http://localhost:9000/users/65abeea7ccb29864b82b9dc4/posts' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiZWVhN2NjYjI5ODY0YjgyYjlkYzQiLCJpYXQiOjE3MDcwNzI5MTYsImV4cCI6MTcwNzA3NjUxNn0.RvNz-Hmf2OBoHR8oTZY83Z7ROBFI42vYXVMA8rQD2Vc' \
-v