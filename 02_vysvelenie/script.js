const btnModra = document.getElementById('btn-modra');
const btnZelena = document.getElementById('btn-zelena');
const btnReset = document.getElementById('btn-reset');

let farbaText = document.getElementById('farba-text');
 
function  zemenaNaModru()  {
    document.body.style.backgroundColor = '#3498db';
    farbaText.textContent = 'Modrá';
}

function  zemenaNaZelenu()  {
    document.body.style.backgroundColor = '#2ecc71';
    farbaText.textContent = 'Zelená';
}

function  reset()  {
    document.body.style.backgroundColor = 'white';
    farbaText.textContent = 'Biela';
}
 
 
 
 
btnModra.addEventListener('click', zemenaNaModru)
btnZelena.addEventListener('click', zemenaNaZelenu)
btnReset.addEventListener('click', reset)
 
 
 