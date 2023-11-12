var contar; //declarar variable
contar = "Louis"; //tipo string
console.log(contar.length);
contar = 15.067; //Tipo float
console.log(contar);

let nombre;
const dato="I'm genie in a bottle";
nombre = "Zoila Baca";
console.log(nombre);
console.log(dato);

let N1=13;
let N2=18;
let s= N1+N2;

console.log("La suma de: " + N1 + " y " + N2 + " es "+ s);

//N1 = prompt("Digite un número");
//N2 = prompt("Digite otro númerito :) ");
s = parseInt(N1)+ parseInt(N2);
console.log("La suma de: " + N1 + " y " + N2 + " es "+ s);
alert("La suma de: " + N1 + " y " + N2 + " es "+ s);

for (contar=1; contar<15; ++contar){
    console.log("Cuento "+contar);
}

//Tablas de mutiplicar 

N = prompt("Tabla de multiplicar: ");
for (contar=1;contar <11;++contar){
    t= contar*N;
    console.log(contar + " * " + N + " = " + t);
}

let i=0;
do{
    i +=1;
    console.log(i);
} while(i<15);
c=5;
while (c<18){
    c+=1;
    console.log(c+ '-item.')
}
console.log(typeof(c));