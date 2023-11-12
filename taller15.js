// Ejercicio 1
document.getElementById("exercise1Button").addEventListener("click", () => {
    const precio8Metros = 560;
    const metrosDeseados = 20;
    const precio20Metros = (metrosDeseados * precio8Metros) / 8;
    const resultado = `El precio de 20 metros de manguera es $${precio20Metros}.`;
    document.getElementById("exercise1Result").textContent = resultado;
});

// Ejercicio 2
document.getElementById("exercise2Button").addEventListener("click", () => {
    const obrerosHacenTrabajo = 12;
    
    const tiempoHacerTrabajo = 15;

    const obrerosCalcularTiempo = 5;

    const tiempoDemora = (obrerosHacenTrabajo * tiempoHacerTrabajo) / obrerosCalcularTiempo;

    const resultado = `5 obreros demoran ${tiempoDemora} horas en efectuar el mismo trabajo.`;

    document.getElementById("exercise2Result").textContent = resultado;
});


// Ejercicio 3
document.getElementById("exercise3Button").addEventListener("click", () => {

    const salarioPorDecada = 5000;
    const diasEnDosMeses = 60;
    const diasDeAusencia = 6;
    const salarioTotal = (salarioPorDecada / 10) * (diasEnDosMeses - diasDeAusencia);
    const resultado = `El salario total en 2 meses, con ${diasDeAusencia} días de ausencia, es de $${salarioTotal}.`;
    document.getElementById("exercise3Result").textContent = resultado;
});

// Ejercicio 4
document.getElementById("exercise4Button").addEventListener("click", () => {
    const litrosPorHora = (15 / 3) * 60; 
    const litrosTotales = 1200;
    const horasRequeridas = litrosTotales / litrosPorHora;
    const resultado = `El corazón bombea 1200 litros de sangre en ${horasRequeridas} horas.`;
    document.getElementById("exercise4Result").textContent = resultado;
});

// Ejercicio 5
document.getElementById("exercise5Button").addEventListener("click", () => {
    const litrosPorMinuto = 100;
    const tiempoActualMinutos = (7 * 60) + 12;
    const nuevoTiempoHoras = 12;
    const nuevoTiempoMinutos = nuevoTiempoHoras * 60;
    const litrosPorMinutoPara12Horas = (litrosPorMinuto * nuevoTiempoMinutos) / tiempoActualMinutos;
    const litrosPorMinutoAcortado = litrosPorMinutoPara12Horas.toFixed(2);
    const resultado = `El grifo debe arrojar ${litrosPorMinutoAcortado} litros por minuto para llenar la piscina en 12 horas.`;
    document.getElementById("exercise5Result").textContent = resultado;
});

// Ejercicio 6
document.getElementById("exercise6Button").addEventListener("click", () => {
    const canecas15Galones = 10;
    const precioCanecas15Galones = 10500;
    const galonesPorCaneca15 = 15;
    const galonesPorCaneca55 = 55;
    const precioPorGalon = precioCanecas15Galones / (canecas15Galones * galonesPorCaneca15);
    const canecas55Galones = 8;
    const costo8Canecas55Galones = canecas55Galones * galonesPorCaneca55 * precioPorGalon;
    const resultado = `El costo de 8 canecas de 55 galones de combustible es $${costo8Canecas55Galones}.`;
    document.getElementById("exercise6Result").textContent = resultado;
});

// Ejercicio 7
document.getElementById("exercise7Button").addEventListener("click", () => {
    const maquinas1 = 8;
    const tiempo1 = 5;
    const folios1 = 120;
    const maquinas2 = 20;
    const tiempo2 = 10; 
    const folios2 = (folios1 * maquinas2 * tiempo2) / (maquinas1 * tiempo1);
    const resultado = `Con 20 máquinas y trabajando el doble de tiempo, se pueden escribir ${folios2} folios.`;
    document.getElementById("exercise7Result").textContent = resultado;
});


// Ejercicio 8
document.getElementById("exercise8Button").addEventListener("click", () => {
    const excursionistasIniciales = 45;
    const duracionInicialDias = 40;
    const razonInicial = 900; 
    const nuevoGrupo = 45 + 5; 
    const nuevaDuracionDias = 2 * 30; 
    const viveresIniciales = excursionistasIniciales * duracionInicialDias * razonInicial;
    const nuevaRazon = viveresIniciales / (nuevoGrupo * nuevaDuracionDias);

    const resultado = `La nueva razón diaria de consumo debe ser de ${nuevaRazon.toFixed(2)} gramos por día.`;
    document.getElementById("exercise8Result").textContent = resultado;
});

// Ejercicio 9
document.getElementById("exercise9Button").addEventListener("click", () => {
    const mecanografasIniciales = 3;
    const tiempoInicialDias = 10;
    const horasDiariasIniciales = 6;
    const nuevasMecanografas = 8;
    const nuevasHorasDiarias = 5;
    const tiempoNecesario = (mecanografasIniciales * tiempoInicialDias * horasDiariasIniciales) /
      (nuevasMecanografas * nuevasHorasDiarias);
    const resultado = `Para realizar el trabajo, 8 mecanógrafas trabajando 5 horas al día tardarán aproximadamente ${tiempoNecesario.toFixed(2)} días.`;
    document.getElementById("exercise9Result").textContent = resultado;
});

// Ejercicio 10
document.getElementById("exercise10Button").addEventListener("click", () => {

    const maquinasIniciales = 5;
    const unidadesIniciales = 75000;
    const diasIniciales = 3;
    const unidadesNuevas = 200000;
    const nuevosDias = 2;
    const maquinasNecesarias = (unidadesNuevas * maquinasIniciales * nuevosDias) /
      (unidadesIniciales * diasIniciales);
    const resultado = `Para atender un pedido de 200,000 envases en 2 días, se deben poner en funcionamiento aproximadamente ${Math.ceil(maquinasNecesarias)} máquinas iguales a las anteriores.`;
    document.getElementById("exercise10Result").textContent = resultado;
});



// Ejercicio 11
document.getElementById("exercise11Button").addEventListener("click", () => {
    const obrerosIniciales = 10;
    const horasDiariasIniciales = 8;
    const diasIniciales = 60;
    const capacidadPiscinaIniciales = 400;
    const capacidadPiscinaNueva = 300;
    const nuevosObreros = 6;
    const nuevasHorasDiarias = 6;
    const diasNecesarios = (diasIniciales * capacidadPiscinaNueva * nuevosObreros * nuevasHorasDiarias) /
      (capacidadPiscinaIniciales * obrerosIniciales * horasDiariasIniciales);
    const resultado = `Para construir una piscina de 300KL, 6 obreros trabajando 6 horas diarias tardarían aproximadamente ${Math.ceil(diasNecesarios)} días.`;
    document.getElementById("exercise11Result").textContent = resultado;
});

// Ejercicio 12
document.getElementById("exercise12Button").addEventListener("click", () => {
    const a = -6;
    const b = -3;
    const c = 30;
    const d = 10;
    const termA = (b * c) / a;
    const termB = (d * b) / c;
    const termC = (a * d) / b;
    const termD = (c * a) / d;
    const resultado = `a: ${termA}, b: ${termB}, c: ${termC}, d: ${termD}`;
    document.getElementById("exercise12Result").textContent = resultado;
});


