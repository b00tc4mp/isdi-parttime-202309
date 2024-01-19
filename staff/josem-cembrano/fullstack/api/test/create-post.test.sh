source ./test/pepetest.sh

echo -e "\n${backgroundWhite}${black}TEST ${tomato}create-post${reset}\n"

echo -e "\n${green}CASE success on correct data${reset}\n"

curl 'http://localhost:8000/posts' \
-H 'Authorization: Bearer 65a7bd5bac10d94819cc652e' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://res.cloudinary.com/teepublic/image/private/s--xotl537p--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1572464534/production/designs/6527136_0.jpg", "text": "EEEEEeeeepaaaaa!!" }' \
-v

# > POST /posts HTTP/1.1
# > Host: localhost:8000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > Authorization: Bearer 1b43kkcm4oxs
# > Content-Type: application/json
# > Content-Length: 108
# >
# < HTTP/1.1 201 Created
# < X-Powered-By: Express
# < Date: Mon, 18 Dec 2023 12:42:29 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < Content-Length: 0

