echo -e "${blue}TEST update post text${reset}"

echo
echo -e "${green}CASE success on correct data${reset}"

curl 'http://localhost:8000/posts/65895deeeed889536efe91dd/likes' \
-H 'Authorization: Bearer 658956f7eed889536efe91d7' \
-H 'Content-Type: application/json' \
-d '{ "text": "Why!?" }' \
-X PATCH \
-v