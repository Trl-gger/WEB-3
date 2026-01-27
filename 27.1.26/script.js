const CHLIEB = 2 * 1.50;
const MASLO = 3 * 2.30;
const MLIEKO = 0.90;

CELKOVA_CENA = CHLIEB + MASLO + MLIEKO      

console.log("Celkova cena za chlieb je " + CHLIEB.toFixed(1) + " €")
console.log("Celkova cena za maslo je " + MASLO.toFixed(1) + " €")
console.log("Celkova cena za mlieko je " + MLIEKO.toFixed(1) + " €")

console.log("Cena za celý nákup je " + CELKOVA_CENA.toFixed(1) + " €");

const KILOMETRE = 5; 
const MILE = 0.6213792 * KILOMETRE.toFixed(1);   
console.log("5 kilometrov je " + MILE.toFixed(1) + " míl")

const GRAMY = 2500;
const KILOGRAMY = GRAMY / 1000;
console.log("2500 gramov je " + KILOGRAMY.toFixed(1) + " kilogramov")

const CELSIUS = 15;
const FARENHEIT = (CELSIUS *  9/5) + 32 ;
console.log("15 stupňov celzia je " + FARENHEIT.toFixed(0) + " stupňov farenheit")

let meno = "Peter"; 
let priezvisko = "Novák"; 

let pismenka = meno.length + priezvisko.length;
console.log("Meno a priezvisko majú spolu " + pismenka + " znakov")