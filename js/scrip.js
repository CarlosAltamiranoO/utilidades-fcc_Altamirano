const limpiar = document.getElementById('limpiar');
const correlatibas = document.getElementById('correl');
const aprobadas = document.getElementById('apro');
let elementoMateria = document.querySelectorAll('.materias');
let flag0 = false;
const materias = [{
    id: 1,
    correl: [0],
    abili: [3, 4, 5],
    nombre: "Introducción a la carrera de Comunicación Social"
}, {
    id: 2,
    correl: [0],
    abili: [9],
    nombre: "Técnicas de Estudio y Comprensión de Textos"
}, {
    id: 3,
    correl: [1],
    abili: [8, 15],
    nombre: "Historia Social Contemporánea"
}, {
    id: 4,
    correl: [1],
    abili: [7, 8, 16],
    nombre: "Introducción a la Comunicación Social"
}, {
    id: 5,
    correl: [1],
    abili: [7, 12, 13],
    nombre: "Teoría del Conocimiento y Lógica"
}, {
    id: 6,
    correl: [0],
    abili: [0],
    nombre: "Economía y Comunicación."
}, {
    id: 7,
    correl: [4, 5],
    abili: [10],
    nombre: " Psicología y Comunicación. "
}, {
    id: 8,
    correl: [3, 4],
    abili: [10, 11],
    nombre: "Teorías Sociológicas I"
}, {
    id: 9,
    correl: [2],
    abili: [13, 16, 23],
    nombre: "Lenguaje I y Producción Gráfica"
}, {
    id: 10,
    correl: [7, 8],
    abili: [14],
    nombre: "Psicología Social"
}, {
    id: 11,
    correl: [8],
    abili: [14],
    nombre: "Teorías Sociológicas II"
}, {
    id: 12,
    correl: [5],
    abili: [0],
    nombre: "Taller: Informática Básica Aplicada."
}, {
    id: 13,
    correl: [20],
    nombre: "Lingüística"
}, {
    id: 14,
    correl: [10, 11],
    abili: [17, 18, 21],
    nombre: "Teorías de la Comunicación I"
}, {
    id: 15,
    correl: [3],
    abili: [19],
    nombre: "Historia Argentina Contemporánea"
}, {
    id: 16,
    correl: [4, 9],
    abili: [23],
    nombre: "Lenguaje II y Producción Radiofónica"
}, {
    id: 17,
    correl: [14],
    abili: [17, 22],
    nombre: "Teorías de la Comunicación II"
}, {
    id: 18,
    correl: [14],
    abili: [0],
    nombre: "Antropología Socio-Cultural"
}, {
    id: 19,
    correl: [15],
    abili: [0],
    nombre: "Movimientos Estéticos y Cultura Argentina"
}, {
    id: 20,
    correl: [13, 17],
    abili: [0],
    nombre: "Semiótica"
}, {
    id: 21,
    correl: [14],
    abili: [0],
    nombre: "Política y Comunicación"
}, {
    id: 22,
    correl: [17],
    abili: [0],
    nombre: "Metodología de la Inv. aplicada"
}, {
    id: 23,
    correl: [9, 16],
    abili: [0],
    nombre: "Lenguaje III y Producción Audiovisual"
}];

for (const elemento of elementoMateria) {
    elemento.addEventListener('click', () => {
        let cod = parseInt(elemento.id);
        let colorP = document.getElementById(cod);
        colorP.style.backgroundColor = 'coral';
        if (flag0) {
            BuscarCorrelativas(cod - 1);
        } else {
            let eco = document.getElementById(6);
            eco.style.backgroundColor = 'darkgreen';
            buscarAvilitadas(cod - 1);
        }
    });
}

limpiar.addEventListener('click', () => {
    for (const elemento of elementoMateria) {
        elemento.style.backgroundColor = 'rgba(121, 115, 115, 0.3)';
    }
});
correlatibas.addEventListener('click', () => {
    for (const elemento of elementoMateria) {
        elemento.style.backgroundColor = 'rgba(121, 115, 115, 0.3)';
    }
    flag0 = false;
});
aprobadas.addEventListener('click', () => {
    for (const elemento of elementoMateria) {
        elemento.style.backgroundColor = 'rgba(121, 115, 115, 0.3)';
    }
    flag0 = true;
});


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

function buscarAvilitadas(n) { //debe resibir numero id que coincida con el indice de el vertor materias
    let m = [];
    let l = materias[n].abili; //  vector de indices de materias a la que habilita
    for (let index = 0; index < l.length; index++) { //recorremos el bector de indice de materias a las que habilita 
        let res = l[index]; // res tiene el elemento del vector habilitadas
        if (res == 0) break; // si es 0 no hay materias que abilita, cortamos el ciclo
        let materia = document.getElementById(res); // accedemos al elemento html de la materia, es el que hay que comprovar si hay que cambiar el color 
        if (materia.style.backgroundColor != 'chartreuse') { // se pregunta si es verde la materia se termina la iteracion
            m = materias[res - 1].correl; // cargamos vector con codigo de materias que deberia tener habilitada 
            bandera = false; //flag para saber si cambiar el color de la materia 
            let correlatiba; // declarar futuro elemneto html
            for (let i = 0; i < m.length; i++) { // se comprueva si todos lor elementos que deberian estar habilitados estan en color coral
                correlatiba = document.getElementById(m[i]);
                if (correlatiba.style.backgroundColor != 'coral') {
                    bandera = true; /* alert("bandera verdarera") */
                } // si alguno es distinto de coral bandera cambia a true
            }
            if (!bandera) materia.style.backgroundColor = 'chartreuse';
        }
    }
}