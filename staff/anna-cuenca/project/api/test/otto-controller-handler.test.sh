# Definición de funciones para imprimir en colores
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

stop() {
    curl -X POST http://localhost:9000/arduino/controller/ottoController -H "Content-Type: application/json" -d '{"action":"stop"}'
    echo "Command to stop sent."
}

# Inicio del script de test
TEST "otto-controller"

CASE "success on otto controller"

# Bucle para leer la entrada del usuario
while true; do
    read -p "Press 'w' to walk forward, 's' to stop, 'q' to quit: " input
    case $input in
        [wW])
            echo "Walking forward..."
            walk_forward
            ;;
        [sS])
            echo "Stopping..."
            stop
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