const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn, .boton-igual");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const resultado = eval(pantalla.textContent);
                if (isNaN(resultado) || !isFinite(resultado)) {
                    pantalla.textContent = "Error!";
                } else {
                    pantalla.textContent = resultado;
                }
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent.length < 13) {
            if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            }
        }
    })
})

//jose maria cembrano//
