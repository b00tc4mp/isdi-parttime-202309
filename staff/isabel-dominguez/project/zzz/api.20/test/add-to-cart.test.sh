echo TEST "Add-to-cart"

echo CASE "success added"

curl http://localhost:9000/cart/65e86464baeea68ff24af628 \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWY1N2QyNGNjZGEwMGUxODk2YmY5YzUiLCJpYXQiOjE3MTEyMTk3NTksImV4cCI6MTcxMTI1NTc1OX0.LlAzEuj_sQaHAOnyhearZ4j3OhtIds6hX_HuZ2pSNKw' \
-H 'Content-Type: application/json' \
-d '{}' \
-v

# TEST Add-to-cart
# CASE success added
# * processing: http://localhost:9000/cart/65e86464baeea68ff24af628
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > POST /cart/65e86464baeea68ff24af628 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWY1N2QyNGNjZGEwMGUxODk2YmY5YzUiLCJpYXQiOjE3MTEyMTk3NTksImV4cCI6MTcxMTI1NTc1OX0.LlAzEuj_sQaHAOnyhearZ4j3OhtIds6hX_HuZ2pSNKw
# > Content-Type: application/json
# > Content-Length: 2
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Date: Sat, 23 Mar 2024 18:52:58 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0
# <