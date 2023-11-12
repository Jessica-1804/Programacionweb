// Ejercicio 1
document.getElementById("exercise1Button").addEventListener("click", () => {
    const nombre = prompt("Ingresa tu nombre");
    const edad = prompt("Ingresa tu edad");

    const anioSiguiente = parseInt(edad) + 1;

    const resultado = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${anioSiguiente} años.`;
    document.getElementById("exercise1Result").textContent = resultado;
});

// Ejercicio 2
document.getElementById("exercise2Button").addEventListener("click", () => {
    const figura = prompt("Ingresa la figura (triangulo, rectangulo, o circulo)");

    if (figura === "triangulo") {
        const base = parseFloat(prompt("Ingresa la base del triángulo"));
        const altura = parseFloat(prompt("Ingresa la altura del triángulo"));
        const area = (base * altura) / 2;
        document.getElementById("exercise2Result").textContent = `El área del triángulo es ${area}`;
    } else if (figura === "rectangulo") {
        const base = parseFloat(prompt("Ingresa la base del rectángulo"));
        const altura = parseFloat(prompt("Ingresa la altura del rectángulo"));
        const area = base * altura;
        document.getElementById("exercise2Result").textContent = `El área del rectángulo es ${area}`;
    } else if (figura === "circulo") {
        const radio = parseFloat(prompt("Ingresa el radio del círculo"));
        const area = Math.PI * Math.pow(radio, 2);
        document.getElementById("exercise2Result").textContent = `El área del círculo es ${area}`;
    } else {
        document.getElementById("exercise2Result").textContent = "Figura no reconocida. Inténtalo de nuevo.";
    }
});


// Ejercicio 3
document.getElementById("exercise3Button").addEventListener("click", () => {
    const numero = parseInt(prompt("Ingrese un número:"));
    const resultContainer = document.getElementById("exercise3Result");

    if (!isNaN(numero)) {
        let result = '';

        for (let i = 1; i <= numero; i++) {
            if (i % 2 === 0) {
                result += `${i} - es par<br>`;
            } else {
                result += `${i} - es impar<br>`;
            }
        }

        resultContainer.innerHTML = result;
    } else {
        resultContainer.innerHTML = "Por favor, ingrese un número válido.";
    }
});

//Ejercicio 4
document.getElementById("exercise4Button").addEventListener("click", () => {
    const numero = parseInt(prompt("Ingrese un número entero mayor que 1:"));
    const resultContainer = document.getElementById("exercise4Result");

    if (!isNaN(numero) && numero > 1) {
        let esPrimo = true;

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            resultContainer.innerHTML = `${numero} es un número primo.`;
        } else {
            resultContainer.innerHTML = `${numero} no es un número primo.`;
        }
    } else {
        resultContainer.innerHTML = "Por favor, ingrese un número entero mayor que 1.";
    }
});

//Ejercicio 5
document.getElementById("exercise5Button").addEventListener("click", () => {
    const numero = parseInt(prompt("Ingrese un número entero mayor que 0:"));
    const resultContainer = document.getElementById("exercise5Result");

    if (!isNaN(numero) && numero > 0) {
        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }

        resultContainer.innerHTML = `${numero}! = ${factorial}`;
    } else {
        resultContainer.innerHTML = "Por favor, ingrese un número entero mayor que 0.";
    }
});

//Ejercicio 6
document.getElementById("exercise6Button").addEventListener("click", () => {
    const resultContainer = document.getElementById("exercise6Result");
    let sum = 0;
    let count = 0;

    while (sum <= 50) {
        const numero = parseFloat(prompt("Ingrese un número:"));

        if (!isNaN(numero)) {
            sum += numero;
            count++;
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    }

    resultContainer.innerHTML = `Total acumulado: ${sum}<br>Números ingresados: ${count}`;
});

//Ejercicio 7

document.getElementById("exercise7Button").addEventListener("click", () => {
    const resultContainer = document.getElementById("exercise7Result");

    // Crear el primer array con 5 números
    const numeros = [3, 7, 2, 9, 4];
    const pares = [];
    const impares = [];

    // Recorrer el array y multiplicar por números aleatorios
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        const resultado = numero * numeroAleatorio;

        // Verificar si el resultado es par o impar
        if (resultado % 2 === 0) {
            pares.push(resultado);
        } else {
            impares.push(resultado);
        }

        // Mostrar la multiplicación y su resultado
        console.log(`${numero} x ${numeroAleatorio} = ${resultado}`);
    }

    // Mostrar los arrays de pares e impares en la consola
    console.log("Números pares:", pares);
    console.log("Números impares:", impares);

    // Mostrar los resultados en la página
    resultContainer.innerHTML = "Ver la consola para los resultados.";
});

//Ejercicio 8

document.getElementById("exercise8Button").addEventListener("click", () => {
    const dniNumberInput = prompt("Ingresa un número de DNI");
    const dniLetterResult = document.getElementById("exercise8Result");

    const dniNumber = parseInt(dniNumberInput);

    if (!isNaN(dniNumber) && dniNumber >= 0 && dniNumber <= 99999999) {
        const index = dniNumber % 23;
        const letraDNI = 'TRWAGMYFPDXBNJZSQVHLCKE'[index];
        dniLetterResult.textContent = `La letra del DNI ${dniNumber} es: ${letraDNI}`;
    } else {
        dniLetterResult.textContent = "Por favor, ingrese un número de DNI válido.";
    }
});
//Ejercicio 9
document.getElementById("exercise9Button").addEventListener("click", () => {
    const resultContainer = document.getElementById("exercise7Result");
    const wordInput = prompt("Ingresa una palabra");
    
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < wordInput.length; i++) {
        const char = wordInput[i];
        if (char.match(/[aeiouáéíóú]/i)) {
            vowelCount++;
        } else if (char.match(/[bcdfghjklmnñpqrstvwxyz]/i)) {
            consonantCount++;
        }
    }
    
    resultContainer.textContent = `Palabra: ${wordInput}\nLongitud: ${wordInput.length}\nConsonantes: ${consonantCount}\nVocales: ${vowelCount}`;
});


//Ejercicio 10
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

document.getElementById("exercise10Button").addEventListener("click", () => {
    const colorInput = prompt("Ingresa un color");
    const resultContainer = document.getElementById("exercise10Result"); // Cambié "exercise7Result" a "exercise10Result"
    
    if (colorInput) {
        const colorEncontrado = colores.includes(colorInput.toLowerCase());
        
        if (colorEncontrado) {
            resultContainer.textContent = `El color ${colorInput} está en el array.`;
        } else {
            resultContainer.textContent = `El color ${colorInput} no está en el array.`;
        }
    } else {
        resultContainer.textContent = "Por favor, ingresa un color.";
    }
    
});



