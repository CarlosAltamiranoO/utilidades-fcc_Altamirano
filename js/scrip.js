let variable = true;
//const porcentajes = (numero, porsentaje) => (numero / 100 ) * porsentaje;

class Porcentajes {
    constructor(numero, porciento) {
        this.numero = parseFloat(numero);
        this.porsiento = parseFloat(porciento);
        this.porsentajeSolo = 0;
        this.porsentajeComp = 0;
    }

    calcularPorsentajeComp() {
        this.porsentajeSolo = (this.numero / 100) * this.porsiento;
        this.porsentajeComp = this.porsentajeSolo + this.numero;
    }

    imprimirDatos() {
        let datos = 'El ' + this.porsiento + '%  de ' + this.numero + ' es: ' + this.porsentajeSolo + '\n' + 'Dando un total de : ' + this.porsentajeComp;
        return datos;
    }

}
/* menu principal */
while (variable) {
    let seleccion = parseInt(prompt(
        'Seleccione la opcion que desee:\n[1] para calcular promedios.\n[2] para calcular porcentajes de varios numeros.\n[3] para calcular Factorial.\n[4] conocer correlativas de 2do.\n[0] Salir '));
    switch (seleccion) {
        case 1:
            promedio();
            break;
        case 2:
            porcentajes();
            break;
        case 3:
            factorial();
            break;
        case 4:
            correlativas()
            break;
        case 0:
            variable = false;
            break;
        default:
            alert('Ingrese una opcion valida!');
            break;
    }
}

function porcentajes() {
    const porcentajesArray = [];
    let cadena = "";
    do {
        let opcion = parseInt(prompt(
            'Seleccione la opcion que desee:\n[1]Ingresar un porsentage a calcular.\n[2]Para devolver los calculos de los porcentajes ingresados[2]Para devolver los calculos de los porcentajes ingresados\n[0]Para salir.'));

        switch (opcion) {
            case 1:
                let porsentaje = parseFloat(prompt('ingrese el porsenaje a calcular '));
                let numero = parseFloat(prompt('Ingrese el numero al que calcular el porsentaje'));

                porcentajesArray.push(new Porcentajes(numero, porsentaje));
                break;
            case 2:
                for (let index = 0; index < porcentajesArray.length; index++) {
                    porcentajesArray[index].calcularPorsentajeComp();
                    cadena = cadena + (porcentajesArray[index].imprimirDatos() + '\n____________________ \n\n');
                }
                alert(cadena);
                break;
            case 0:
                alert('Saliendo');
                return;
            default:
                alert('Ingrese una opcion valida!');
                break;
        }


    } while (true);

}

function promedio() {
    let n = 0;
    let prom = 0;
    do {
        let nota = prompt('Ingrése ' + (n + 1) + '° nota/s:  \n[p] para calcular \n[s] salir');
        if (!isNaN(nota)) {
            if (nota > 0) {
                prom += parseInt(nota);
                n++;
            } else alert('no puede ingresar " 0 " como calificacion');
        }
        if (isNaN(nota)) {
            if (nota == 's' || nota == 'S') {
                alert("se sale " + nota);
                break;
            }
            if (nota == 'p' || nota == 'P') {
                if (n <= 1) {
                    alert('Ingrése primero notas para calcular el promedio!');
                    continue;
                } else {
                    alert('El promedio es:' + (prom / n) + ' teniendo ' + n + ' notas');
                    break;
                }
            } else {
                alert('Ingrése una opcion valida!');
                continue;
            }
        }
    }
    while (true);
}

function factorial() {
    let numero;
    let resultado;
    let iteracion = 0; //el numero de iteraciones "0" en caso que ingrese 1 aparesca 0 iteraciones 

    do {
        numero = parseInt(prompt("Ingrése un numero entero positivo para calcular el factorial y sus iteraciones en su calculo."));
        if (isNaN(numero)) {
            alert("Ingrése un numero positivo");
            return;
        }

    } while (numero < 0) // para asegurarse de que no se ingresen numeros negativos (Al ser parseInt se supone que se controla numeros con coma)

    resultado = numero;

    for (let i = numero - 1; i >= 1; i--) {
        alert("Iteracion " + (iteracion + 1) + ":  " + resultado + " * " + i + "."); // se usa iteracion+1  porque esta inicialisado en 0!
        resultado = resultado * i;
        iteracion++; //en este paso se actualiza el numero de iteracion
    }

    alert("El factorial del numero " + numero + " es: " + resultado + ". Y se hiso un total de " + iteracion + " iteraciones.");
}

function correlativas() {
    const respons = [false, false, false, false, false, false, false, false];
    const materias = [{
        id: 3,
        nombre: "Historia Social Contemporánea"
    }, {
        id: 4,
        nombre: "Introducción, a la Comunicación Social"
    }, {
        id: 5,
        nombre: "Teoría del Conocimiento y Lógica"
    }, {
        id: 6,
        nombre: "Economía y Comunicación."
    }, {
        id: 7,
        nombre: " Psicología y Comunicación. "
    }, {
        id: 8,
        nombre: "Teorías Sociológicas I"
    }, {
        id: 9,
        nombre: "Lenguaje I y Producción Gráfica"
    }, {
        id: 10,
        nombre: "Psicología Social"
    }, {
        id: 11,
        nombre: "Teorías Sociológicas II"
    }, {
        id: 12,
        nombre: "Taller: Informática Básica Aplicada."
    }, {
        id: 13,
        nombre: "Lingüística"
    }, {
        id: 14,
        nombre: "Teorías de la Comunicación I"
    }, {
        id: 15,
        nombre: "Historia Argentina Contemporánea"
    }, {
        id: 16,
        nombre: "Lenguaje II y Producción Radiofónica"
    }]
    do {
        let option = parseInt(prompt('Seleccione:\n[1]Ingresar materias de primer año.\n[2]calcular.\n[3]consultar año de materia\n[0]Para salir.'));
        switch (option) {
            case 1:
                do {
                    let respuesta = '';
                    for (let index = 0; index < 7; index++) {
                        respuesta = respuesta + '[' + (index) + '] para ' + materias[index].nombre + ' n°' + materias[index].id + ' \n';
                    }
                    let res = parseInt(prompt('Seleccione:\n' + respuesta + '[99] para terminar.'));
                    if (res == 99) break;
                    if (res >= 0 && res <= 7){ respons[res] = true; alert("ingreso materia");}
                    else alert('Ingrese una opcion valida!');
                } while (true);

                break;
            case 2:
                alert(mostrarResultado(materias, respons));

                break;
            case 3:
                let respuesta = '';
                for (let index = 0; index < materias.length; index++) {
                    respuesta = respuesta + ' [' + materias[index].id + '] '+ materias[index].nombre +'\n';
                }
                let res = parseInt(prompt('Seleccione el numero de materia:\n' + respuesta + ' [ 0] para terminar.'));
                if (res == 0) break;
                if (res < 17 && res > 2){
                    let resultadoFinal = materia(res, materias);/* alert("ingreso" + res) */
                    alert(resultadoFinal);
                }
                else alert('Ingrese una opcion valida!');
                break;
            case 0:
                alert('Saliendo');
                return;
            default:
                alert('Ingrese una opcion valida!');
                break;
        }
    }
    while (true);
}

function mostrarResultado(arreglo01, arreglo02) {
    let respFinal = 'Usted puede cursar:\n';
    if (arreglo02[0]) respFinal += arreglo01[12].nombre + ' n°' + arreglo01[12].id + '\n';
    if (arreglo02[5]) {
        respFinal += arreglo01[8].nombre + ' n°' + arreglo01[8].id + '\n';
        if (arreglo02[4]) respFinal += arreglo01[7].nombre + ' n°' + arreglo01[7].id + '\n';
    }
    if (arreglo02[3]) respFinal += arreglo01[9].nombre + ' n°' + arreglo01[9].id + '\n' + arreglo01[10].nombre + ' n°' + arreglo01[10].id + '\n';
    return respFinal;
}

function materia(params, arreglo) {
    respuesta = "";

    if (params > 2 && params < 6) {
        respuesta = "1° año - 2° cuatrimestre";
    }
    if (params > 5 && params < 10) {
        respuesta = "1° año - 1° cuatrimestre";
    }
    if (params > 9 && params < 13) {
        respuesta = "2° año - 1° cuatrimestre";
    }
    if (params >= 13 && params <= 15) {
        respuesta = "2° año - 2° cuatrimestre";
    }
    return "La materia " + arreglo[params].nombre + 'Pertenece a: \n' + respuesta;
}