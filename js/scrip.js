const limpiar = document.getElementById('boton');
let elementoMateria = document.querySelectorAll('.materias');
const materias = [{
    id: 1,
    correl: [0],
    nombre: "Introducción a la carrera de Comunicación Social"
}, {
    id: 2,
    correl: [0],
    nombre: "Técnicas de Estudio y Comprensión de Textos"
}, {
    id: 3,
    correl: [1],
    nombre: "Historia Social Contemporánea"
}, {
    id: 4,
    correl: [1],
    nombre: "Introducción a la Comunicación Social"
}, {
    id: 5,
    correl: [1],
    nombre: "Teoría del Conocimiento y Lógica"
}, {
    id: 6,
    correl: [0],
    nombre: "Economía y Comunicación."
}, {
    id: 7,
    correl: [4, 5],
    nombre: " Psicología y Comunicación. "
}, {
    id: 8,
    correl: [3, 4],
    nombre: "Teorías Sociológicas I"
}, {
    id: 9,
    correl: [2],
    nombre: "Lenguaje I y Producción Gráfica"
}, {
    id: 10,
    correl: [7, 8],
    nombre: "Psicología Social"
}, {
    id: 11,
    correl: [8],
    nombre: "Teorías Sociológicas II"
}, {
    id: 12,
    correl: [5],
    nombre: "Taller: Informática Básica Aplicada."
}, {
    id: 13,
    correl: [5, 9],
    nombre: "Lingüística"
}, {
    id: 14,
    correl: [10, 11],
    nombre: "Teorías de la Comunicación I"
}, {
    id: 15,
    correl: [3],
    nombre: "Historia Argentina Contemporánea"
}, {
    id: 16,
    correl: [4, 9],
    nombre: "Lenguaje II y Producción Radiofónica"
}];

for (const elemento of elementoMateria) {
    elemento.addEventListener('click', () => {
        let cod = parseInt(elemento.id);
        let colorP = document.getElementById(cod);
        colorP.style.backgroundColor = 'coral';
        BuscarCorrelativas(cod - 1);
    });
}

function BuscarCorrelativas(n) {
    let m = materias[n].correl;
    for (let index = 0; index < m.length; index++) {
        let res = m[index];
        if (res == 0) break;
        let color = document.getElementById(res);
        color.style.backgroundColor = 'chartreuse';
        BuscarCorrelativas(res - 1);
    }
}

limpiar.addEventListener('click', () => {
    for (const elemento of elementoMateria) {
        elemento.style.backgroundColor = 'rgba(121, 115, 115, 0.3)';
    }
});