#!/bin/bash

source pepetest.sh

TEST "retrieve-fav-posts"

CASE "success on correct user id"

curl 'http://localhost:8000/posts/favs' \
-H 'Authorization: Bearer 65cccbbe6c9e4ed81a597cec' \
-v

