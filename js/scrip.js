var numero;
var resultado;
var iteracion =0;   //el numero de iteraciones "0" en caso que ingrese 1 aparesca 0 iteraciones 

do {
    numero =  parseInt(prompt("Ingrese un numero entero positivo para calcular el factorial y sus iteraciones en su calculo."));
}while(numero < 0)  // para asegurarse de que no se ingresen numeros negativos (Al ser parseInt se supone que se controla numeros con coma)

resultado = numero;

for (let i = numero - 1; i >= 1; i -- ){
    alert("Iteracion "+(iteracion+1)+":  "+resultado+" * "+i+".");  // se usa iteracion+1  porque esta inicialisado en 0!
    resultado = resultado * i;
    iteracion++;    //en este paso se actualiza el numero de iteracion
}

alert ("El factorial del numero "+numero+" es: "+resultado+". Y se hiso un total de "+iteracion+" iteraciones.");