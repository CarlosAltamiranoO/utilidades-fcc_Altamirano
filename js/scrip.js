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
        'Seleccione la opcion que desee:\n[1] para calcular promedios.\n[2] para calcular porcentajes de varios numeros.\n[3] para calcular Factorial.\n[0] Salir '));
    switch (seleccion) {
        case 1:
            promedio();
            break;
        case 2:
            porcentajes();
            break;

            /*             let numero = parseFloat(prompt('Ingrese el numero al que calcular el porsentaje'));
                        let porsentaje = parseFloat(prompt('ingese el porsenaje a calcular '));
                        
                        if (isNaN(numero) || isNaN(porsentaje)){
                            alert("ingrese numero para el calculo");
                            break;
                        } 
                        let resultado = porcentajes(numero, porsentaje);
                        alert('El ' + porsentaje + '% de ' + numero + ' es: ' + resultado + '\nDanto un suma del porsentsaje igual a: ' + (resultado + numero));
                        break; */
        case 3:
            factorial();
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
            'Seleccione la opcion que desee:\n[1]Ingresar un porsentage a calcular.\n[2]Para devolver los calculos de los porcentajes ingresados,\n[0]Para salir.'));

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