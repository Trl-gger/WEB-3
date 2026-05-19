function pozdrav (){
 
    let vysledok = document.getElementById('vysledok1'); //vytvoril som premennu, ktoru som zobral z html
    vysledok.textContent = 'Zdravím'; //vypise text do html
 
    vysledok.style.color = 'darkgreen'; //pridam tomu vizual
    vysledok.style.fontWeight = 'bold';
}
 
 
 
function zmenaFarbuPozadia (){
    const farby = ['#ff6b6b', '#8BDFDD', '#F48F68', '#FFE394', '#C9CAAC', '#CCD67F'];//pole kde je 5/6 farbieb a random vygeneruje jednu z nich
    let vysledok = document.getElementById('vysledok1');
 
    const nahodnyIndex = Math.floor(Math.random() * farby.length);
 
    document.body.style.background = farby[nahodnyIndex];
    vysledok.textContent = `Farba pozadia je zmenená na ${farby[nahodnyIndex]}`;
 
}
 
let pocet = 0; 

function zvysPocitadlo(){
    pocet++;
    document.getElementById('pocitadlo').textContent = pocet;
}
 
function znizPocitadlo(){
    pocet--;
    document.getElementById('pocitadlo').textContent = pocet;
}

function resetPocitadlo(){
    pocet = 0;
    document.getElementById('pocitadlo').textContent = pocet;
}

let velkostFontu = 16;

function zvacsFont(){
    velkostFontu = velkostFontu + 20;
    const vysledokText = document.getElementById('vysledokText');
    vysledokText.style.fontSize = velkostFontu + 'px';
}

function zmensFont(){
    velkostFontu = velkostFontu - 20;
    const vysledokText = document.getElementById('vysledokText');
    vysledokText.style.fontSize = velkostFontu + 'px';
}

function normalnyFont(){
    velkostFontu = 16;
    const vysledokText = document.getElementById('vysledokText');
    vysledokText.style.fontSize = velkostFontu + 'px';
}

const pozdravBtn = document.getElementById('pozdravBtn');
const zmenaPozadiaBtn = document.getElementById('zmenFarbuBtn')
 
const zvysBtn = document.getElementById('zvysBtn');
const znizBtn = document.getElementById('znizBtn');
const resetBtn = document.getElementById('resetBtn');

const zvacsBtn = document.getElementById('zvacsBtn')
const zmensBtn = document.getElementById('zmensBtn')
const normalnyBtn = document.getElementById('normalnyBtn')
 
 
zvysBtn.addEventListener('click', zvysPocitadlo);
znizBtn.addEventListener('click', znizPocitadlo);
resetBtn.addEventListener('click', resetPocitadlo);

zvacsBtn.addEventListener('click', zvacsFont);
zmensBtn.addEventListener('click', zmensFont);
normalnyBtn.addEventListener('click', normalnyFont);

const vysledokNahodne = document.getElementById('vysledokNahodne')
 
 
pozdravBtn.addEventListener('click', pozdrav); 
zmenaPozadiaBtn.addEventListener('click', zmenaFarbuPozadia);

function nahodneCislo(){
    const nahodneCislo = Math.floor(Math.random() * 100);
    vysledokNahodne.textContent = nahodneCislo;
}


const nahodneCisloBtn = document.getElementById('nahodneCisloBtn')
nahodneCisloBtn.addEventListener('click', nahodneCislo);

function nahodnaFarba(){
    const farby = ['#ff6b6b', '#8BDFDD', '#F48F68', '#FFE394', '#C9CAAC', '#CCD67F'];
    const nahodnaFarba = Math.floor(Math.random() * farby.length);
    vysledokNahodne.style.color = farby[nahodnaFarba];
}


const NahodnaFarbaText = document.getElementById('nahodnaFarbaBtn')
nahodnaFarbaBtn.addEventListener('click', nahodnaFarba);