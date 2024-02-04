source pepetest.sh

TEST "retrieve-user"

CASE "success on correct token"

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFlZDBiZWUwMDVlNjQ0YTk1YWZiMmEiLCJpYXQiOjE3MDY0ODM1MTZ9.QMDxw1JCxaJjQCd4EOqKm5cKdfJx83CmLRm6DTkXE_A' \
-v

CASE "fails on corrupted token"
curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFlZDBiZWUwMDVlNjQ0YTk1YWZiMmEiLCJpYXQiOjE3MDY0ODM1MTZ9.QMDxw1JCxaJjQCd4EOqKm5cKdfJx83CmLRm6DTkXE_B' \
-v

curl 'http://localhost:9000/users' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFlZDBiZWUwMDVlNjQ0YTk1YWZiMmEiLCJpYXQiOjE3MDY0ODM1MTZ9.QMDxw1JCxaJjQCd4EOqKm5cKdfJx83CmLRm6DTkXE_A' \
-v