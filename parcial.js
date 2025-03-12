// Pedir al usuario que ingrese dos números
var num1 = parseInt(prompt("Ingrese el primer número:"));
var num2 = parseInt(prompt("Ingrese el segundo número:"));

// Verificar que los valores ingresados sean números válidos
if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
    console.log("Por favor, ingrese solo números enteros positivos.");
} else {
    // Determinar cuál es el mayor y cuál es el menor
    var mayor = Math.max(num1, num2);
    var menor = Math.min(num1, num2);

    // Verificar si el mayor es múltiplo del menor
    if (mayor % menor === 0) {
        console.log(mayor + " es múltiplo de " + menor);
    } else {
        console.log(mayor + " NO es múltiplo de " + menor);
    }
}
