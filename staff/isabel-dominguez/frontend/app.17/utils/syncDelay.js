function syncDelay(callback, seconds) {
    const before = Date.now()

    while (Date.now() - before < seconds * 1000);

    callback()
}

// Las tareas se ejecutan una tras otra, de manera secuencial. Cada tarea debe esperar a que la anterior se complete antes de comenzar.