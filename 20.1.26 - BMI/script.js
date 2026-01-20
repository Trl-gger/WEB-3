const vaha = parseFloat(prompt("Zadaj hmotnostť v kilogramoch"));
const vyska = parseFloat(prompt("Zadaj výška v metroch"));

const vyska = document.getElementById(vyska);
const vaha = document.getElementById(vaha)
 
console.log.get(vaha);
console.log(vyska);
 
console.log(vyska + vaha);
 
const bmi = vaha / vyska*vyska ;
 
console.log(bmi);
 
if (bmi < 18.5) {
    console.log("Podváha");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normálna váha");
}  else if (bmi >= 25 && bmi < 30) {
    console.log("Nadváha");
} else (bmi >= 30 && bmi < 40)
    console.log("Obezita");
