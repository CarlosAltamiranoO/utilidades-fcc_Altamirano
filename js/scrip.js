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





// tecnicaturas

const cTecnicatura = document.getElementById('comboT');
const cMoneda = document.getElementById('comboM');
const APIKEY = '3ea1ec0259505464b753f2c1';
let montoC;
let montoT;

const btnGuardar = document.getElementById('guardarTecni');
const formaP = document.getElementById('formaPago');
const costoCuota = document.querySelector('.costoCuota');
const costoTotal = document.querySelector('.costoTotal');
const recuperarP = document.getElementById('recuperar');
const interes = [{
    cuota: 3,
    porsentaje: 5
}, {
    cuota: 6,
    porsentaje: 10
}, {
    cuota: 12,
    porsentaje: 20
}];
const userTecnicatura = [];
const tecnicaturas = [{
    id: 'RP',
    nombre: 'Relaciones Publicas',
    monto: 90000,
}, {
    id: 'T',
    nombre: 'Turismo',
    monto: 80000,
}, {
    id: 'PM',
    nombre: 'Producion de Medios',
    monto: 75000,
}, {
    id: 'PD',
    nombre: 'Periodismo Deportivo',
    monto: 90000,
}]

window.onload = mostrarTecnicaturas(tecnicaturas), cMoneda.disabled = true;

class PresupuestoTec {
    constructor(nombre, moneda, monto, cuotas, precioCuota, total) {
        this.nombre = nombre;
        this.moneda = moneda;
        this.monto = parseFloat(monto);
        this.cuotas = parseInt(cuotas);
        this.precioCuota = parseFloat(precioCuota);
        this.total = parseFloat(total);
    }
}

function mostrarTecnicaturas(tecnicaturas) {
    for (const tecnicatura of tecnicaturas) {
        let option = `<option value="${tecnicatura.id}" id="${tecnicatura.id}"> Tecnicatura: ${tecnicatura.nombre}</option>`
        cTecnicatura.innerHTML += option;
    }
}


formaP.addEventListener('change', () => {
    let variable = parseInt(document.getElementById('formaPago').value);
    let precioC;
    if (isNaN(variable)) return;
    let monto = tecnicaturas.find(tecnicatura => tecnicatura.id == cTecnicatura.value).monto;
    precioC = precioCuota(variable, monto);
    costoTotal.value = variable * precioC;
    costoCuota.value = precioC;
    cMoneda.disabled = false;
    cTecnicatura.disabled = true;
    montoC = costoCuota.value;
    montoT = costoTotal.value;
    obtenerTasaCambio();
})

cMoneda.addEventListener('change', () => {
    obtenerTasaCambio();
})

function precioCuota(cuotas, monto) {
    if (cuotas != 1) {
        let cuotaInte = interes.find(cuota => cuota.cuota == cuotas).porsentaje;
        return (monto / cuotas) + (((monto / cuotas) * cuotaInte) / 100);
    } else return monto;

}


function guardarStorage(TP) {
    localStorage.setItem('TecnicaturaPre', JSON.stringify(TP));

}

function crearPresupuesto() {
    return new PresupuestoTec(tecnicaturas.find(m => m.id == cTecnicatura.value).nombre, cMoneda.options[cMoneda.selectedIndex].text, tecnicaturas.find(m => m.id == cTecnicatura.value).monto, parseInt(document.getElementById('formaPago').value), costoCuota.value, costoTotal.value);
}


btnGuardar.addEventListener('click', () => {
    let PT = crearPresupuesto();
    guardarStorage(PT);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'se ah guardado el presupuesto',
        showConfirmButton: false,
        timer: 1500
    });
})

recuperarP.addEventListener('click', () => {
    let PT = recuperarStorage('TecnicaturaPre');
    let resp;
    if (PT != false) {
        resp = `<p>Presupuesto Anterior:</p><p>Tecnicatura: ${PT.nombre}</p><p>Moneda: ${PT.moneda}</p><p>Cuotas: ${PT.cuotas}</p><p>Costo de cuota: ${PT.precioCuota}</p><p>Costo Total: ${PT.total}`;
    } else {
        resp = `<p>No se encontraron elementos</p>`;
    }
    Swal.fire({
        html: `<h4>Presupuesto Guardado</h4>
        <br> ${resp}`
    })

})

function recuperarStorage(PT) {
    let pre = JSON.parse(localStorage.getItem(PT));

    if (pre == null) {
        return false;
    } else {
        return pre;
    }
}

fetch(` https://v6.exchangerate-api.com/v6/${APIKEY}/codes`)
    .then(res => res.json())
    .then((data) => {
        for (element of data.supported_codes) {
            console.log(element[1]);
            let predet = (element[0] == 'ARS') ? 'selected' : '';
            let option = `<option value="${element[0]}" ${predet} id="${element[0]}">${element[1]}</option>`
            cMoneda.innerHTML += option;
        }
    })

function obtenerTasaCambio() {
    const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/ARS`;

    fetch(URL)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            console.log(result.conversion_rates);
            let tasaConversion = result.conversion_rates[cMoneda.value];
            let resultCuota = (montoC * tasaConversion).toFixed(2);
            let resultTotal = (montoT * tasaConversion).toFixed(2);
            costoCuota.value = resultCuota;
            costoTotal.value = resultTotal;

        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo Salio muy Mal!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        });

}