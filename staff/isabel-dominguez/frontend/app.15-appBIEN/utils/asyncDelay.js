function asyncDelay(callback, seconds) {
    setTimeout(callback, seconds * 1000)
}

// Las tareas pueden ejecutarse simultáneamente, sin necesidad de esperar a que una tarea termine para comenzar otra. Esto permite que el programa continúe ejecutando otras tareas mientras se realizan operaciones que podrían tomar tiempo, como el acceso a base de datos o la obtención de datos desde internet.