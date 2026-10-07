// Operadores matemáticos

let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia,concatenar;
let Suma, Resta, Mult, Div, Residuo, Potencia;

//Obtener los datos a través del usuario
a = prompt('Ingrese un número: ');
b= prompt('Ingrese otro número: ');

// Resultados de las operaciones
suma = Number(a) + Number(b); // Aqui la operación da un error debido a que se concatenan los datos
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = a - b; 
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);

mult = a * b;
document.write("La multiplicación es: ", mult, "<br>");
console.log("La multiplicación es: ", mult);

residuo = a % b;
document.write("El residuo es:", residuo, "<br>");
console.log("El residuo es: ", residuo);

div = a/ b;
document.write("La división es: ", div, "<br>");
console.log("La división es: ", div);

potencia = a ** b;
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);

concatenar = a + b;
document.write("La concatenación es: ", concatenar, "<br>");
console.log("La concatenación es: ", concatenar);
// Obtener los datos a través del usuario
c = parseInt(prompt("Ingrese un número: "));
d = parseFloat(prompt("Ingrese otro número: "));

// Obtener los datos a través del usuario
c = parseInt(prompt("Ingrese un número: "));
d = parseFloat(prompt("Ingrese otro número: "));

suma = c + d;
resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.writeln(
    "Los resultados de las operaciones son:<br>",
    "Suma: ", suma, '<br>',
    "Resta: ", resta, '<br>',
    "Multiplicación: ", mult, '<br>',
    "División: ", div, '<br>',
    "Residuo: ", residuo, '<br>',
    "Potencia: ", potencia, '<br>'
);

console.log("Las operaciones resueltas son:",
    "Suma: ", suma,
    "Resta: ", resta,
    "Multiplicación: ", mult,
    "División: ", div,
    "Residuo: ", residuo,
    "Potencia: ", potencia
);