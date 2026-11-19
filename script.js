
const docentes = [
    ["Mónica Paco Ramos", "Inicial en Familia Comunitaria"],
    ["Delia Casilla Yujra", "Inicial en Familia Comunitaria"],
    ["Félix Choquetarqui Cruz", "Primaria Comunitaria Vocacional"],
    ["Virginia Roxana Gutiérrez Mamani", "Primaria Comunitaria Vocacional"],
    ["David Yhonny Rojas Chipana", "Primaria Comunitaria Vocacional"],
    ["Rebeca Yana Apaza", "Primaria Comunitaria Vocacional"],
    ["Cecilio Alanoca Tarqui", "Primaria Comunitaria Vocacional"],
    ["Jhannet Mamani Paredes", "Primaria Comunitaria Vocacional"],
    ["Zulma Gutiérrez Troche", "Biología - Geografía"],
    ["Jhenny Gómez Tumiri", "Física - Química"],
    ["Félix Carita Alejo", "Lengua Castellana"],
    ["Rosario Alejo Alejo", "Lengua Extranjera"],
    ["Marion Marlene Conde Saico", "Ciencias Sociales"],
    ["Félix Isaac Pari Morales", "Educación Física y Deportes"],
    ["Pamela Catacora Pacheco", "Educación Musical"],
    ["Ronald Aníbal Quispe Ramos", "Artes Plásticas y Visuales"],
    ["Shirley Conde Gutiérrez", "Cosmovisiones, Psicología y Filosofía"],
    ["María Roxana Pari Mamani", "Valores, Espiritualidades y Religiones"],
    ["Víctor Hugo Huarina Bautista", "Matemática"],
    ["Sonia Lecona Condori", "Técnica Tecnológica"],
    ["José Luis Layme Mamani", "Técnica Tecnológica Especializada"],
    ["Jhancarla Arias Alcocer", "Lengua Extranjera"],
    ["Ramiro Ronald Calle Mamani", "Primaria - Secundaria"],
    ["Roger Cruz Cáceres", "Informática"]
];

const administrativos = [
    ["Lic. Santos Ysrrael Targui Fernandez", "Director"],
    ["Elías Averanga Tallacagua", "Capellán"],
    ["Sra. Virginia Lucía Limachi Mamani", "Secretaria"],
    ["Sr. Benedicto Quispe Condors", "Regente"],
    ["Sra. Carolina Vargas Patsi", "Asistente de aula"],
    ["Sra. Elizabeth Luque Mamani", "Asistente de aula"],
    ["Sra. Paulina Laura Canaviri", "Portera"]
];

// Mostrar docentes
const listaDocentes = document.getElementById("listaDocentes");

function mostrarDocentes(lista) {
    if (!listaDocentes) return;

    if (lista.length === 0) {
        listaDocentes.innerHTML =
            "<p>No se encontraron docentes o especialidades.</p>";
        return;
    }

    listaDocentes.innerHTML = lista.map(docente => `
        <div class="tarjeta-docente">
            <h3>${docente[0]}</h3>
            <p>${docente[1]}</p>
        </div>
    `).join("");
}

mostrarDocentes(docentes);

// Mostrar personal administrativo
const listaAdministrativos =
    document.getElementById("listaAdministrativos");

if (listaAdministrativos) {
    listaAdministrativos.innerHTML = administrativos.map(persona => `
        <div class="tarjeta-docente">
            <h3>${persona[0]}</h3>
            <p>${persona[1]}</p>
        </div>
    `).join("");
}

// Buscador de docentes y especialidades
const buscador = document.getElementById("buscador");

if (buscador) {
    buscador.addEventListener("input", function () {
        const texto = this.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

        const resultados = docentes.filter(docente => {
            const nombre = docente[0]
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            const especialidad = docente[1]
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            return nombre.includes(texto) ||
                   especialidad.includes(texto);
        });

        mostrarDocentes(resultados);
    });
}

// Menú para celulares
const botonMenu = document.getElementById("menu-toggle");
const navegacion = document.querySelector(".nav-links");

if (botonMenu && navegacion) {
    botonMenu.addEventListener("click", function () {
        navegacion.classList.toggle("activo");
    });
}
window.addEventListener("load", function () {
    setTimeout(function () {
        const pantalla = document.getElementById("pantalla-inicio");

        if (pantalla) {
            pantalla.classList.add("oculta");

            setTimeout(function () {
                pantalla.remove();
            }, 800);
        }
    }, 4000);
});