print_in_orange() {
    echo -e "\033[1;38;5;208m$1\033[0m"
}

print_in_yellow() {
    echo -e "\033[1;33m$1\033[0m"
}

print_in_red() {
    echo -e "\033[1;31m$1\033[0m"
}

TEST() {
    print_in_yellow "TEST $1"
}

CASE() {
    message="$*"
    print_in_orange "\n\nCASE $message"
}

ERROR_CASE() {
    message="$*"
    print_in_red "\n\nERROR CASE $message"
}