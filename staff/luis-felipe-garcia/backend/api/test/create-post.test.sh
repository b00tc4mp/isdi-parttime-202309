source pepetest.sh

TEST "create-post"

CASE "success"

curl 'http://localhost:8000/posts' \
-H 'Authoritation: Bearer 1g6al6ee05pc' \
-H 'Content-Type: application/json' \
-d '{ "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agroponiente.com%2Fcatalogo-fruta-verdura%2Fpepino-almeria%2F&psig=AOvVaw37f9ptd9x1kLQ34gQfTk7M&ust=1702443959476000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjnjI-QiYMDFQAAAAAdAAAAABAD", "text": "Pepino from agropinente", }' \
-v