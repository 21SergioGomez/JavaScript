let intervalId;
let celdaMuerta = 0;
let celdaNueva = 0;

function iniciarJuego() {

    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;
    let tabla = document.getElementById("tablero");

    celdaMuerta = 0;
    celdaNueva = 0;

    document.getElementById("tablero").innerHTML = "";

    for (let i = 0; i < filas; i++) {
        let nuevaFila = tabla.insertRow();

        for (let j = 0; j < columnas; j++) {

            let celda = nuevaFila.insertCell();
            celda.style.width = "10px";
            celda.style.height = "10px";

            let rand = Math.floor(Math.random() * 10);

            if (rand < 7)
                celda.classList.add("morta");
            else
                celda.classList.add("viva");
        }
    }
    clearInterval(intervalId);
    intervalId = setInterval(turnoNuevo, 99);
}

function turnoNuevo() {
    let taula = document.getElementById("tablero");
    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {

            let contador = 0;

            // Obtener la celda actual
            let celda = taula.rows[i].cells[j];

            // Verificar las celdas vecinas
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    // Evitar bordes y la celda actual
                    if (x >= 0 && x < filas && y >= 0 && y < columnas && !(x === i && y === j)) {
                        if (taula.rows[x].cells[y].classList.contains('viva'))
                            contador++;
                    }
                }
            }

            // Aplicar reglas del juego
            if (celda) {
                if (celda.classList.contains("morta") && contador === 3) {
                    celda.classList.remove("morta");
                    celda.classList.add("viva");
                    celdaNueva++;
                    document.getElementById("nuevas").innerHTML = "Celdas <strong>nuevas: </strong>" + celdaNueva;
                } else if (celda.classList.contains("viva") && (contador < 2 || contador > 3)) {
                    celda.classList.remove("viva");
                    celda.classList.add("morta");
                    celdaMuerta++;
                    document.getElementById("muertas").innerHTML = "  Celdas <strong>muertas: </strong>" + celdaMuerta;
                }
            }
        }
    }
}
