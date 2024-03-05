print_in_orange() {
  echo -e "\033[1;38;5;208m$1\033[0m"
}

print_in_yellow() {
  echo -e "\033[1;33m$1\033[0m"
}

function TEST() {
    print_in_yellow "TEST $1"
}

function CASE() {
  # Unir todos los parámetros en un solo mensaje
  message="$*"
  print_in_orange "\n\nCASE $message"
}

# Funciones para interactuar con el servidor
walk_forward() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"walkForward"}'
    echo "Command to walk forward sent."
}

walk_backward() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"walkBackward"}'
    echo "Command to walk backward sent."
}

turn_right() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"turnRight"}'
    echo "Command to turn right sent."
}

stop() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"stop"}'
    echo "Command to stop sent."
}

endSequence() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"endSequence"}'
    echo "Command to endSequence sent."
}

executeSequenceById() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"executeSequenceById",  "sequenceId":"65e779b95ca9de5f2e0d0b44"}'
    echo "Command to executeSequenceById sent."
}

jump() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"jump"}'
    echo "Command to jump sent."
}

say_hi() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"sayHi", "message":"¡Hola, soy Otto!"}'
    echo "Command to say hi sent."
}

clear_lcd() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"clearLCD"}'
    echo "Command to clear LCD sent."
}

# Inicio del script de test
TEST "otto-controller"

CASE "success on otto controller"

# Bucle para leer la entrada del usuario
while true; do
    read -p "Press 'w' to walk forward, 'b' to walk backward, 'r' to turn right, 's' to stop, 'h' to say hi, 'c' to clear LCD, 'e' to clear LCD, 'q' to quit: " input
    case $input in
        [wW])
            echo "Walking forward..."
            walk_forward
            ;;
        [bB])
            echo "Walking backward..."
            walk_backward
            ;;
        [eE])
            echo "Saving sequence..."
            endSequence
            ;;

        [aA])
            echo "Reproducing sequence..."
            executeSequenceById
            ;;
        [rR])
            echo "Turning Right..."
            turn_right
            ;;
        [jJ])
            echo "Jumping..."
            jump
            ;;
        [sS])
            echo "Stopping..."
            stop
            ;;
        [hH])
            echo "Saying hi..."
            say_hi
            ;;
        [cC])
            echo "Clearing LCD..."
            clear_lcd
            ;;
        [qQ])
            echo "Quitting..."
            break
            ;;
        *)
            echo "Invalid input."
            ;;
    esac
done