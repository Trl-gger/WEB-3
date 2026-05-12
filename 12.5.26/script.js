function pozdrav(){
    let vysledok = document.getElementById('vysledok1');
    vysledok.textcontent = 'Mal som ťa pozdraviť tak ťa zdravím';

    vysledok.style.color = 'darkgreen';
    vysledok.style.fontweight = 'bold';
}

const pozdravBtn = document.getElementById('pozdravBtn');
pozdravBtn.addEventListener('click', pozdrav)

function zmenaFarbyPozadia (){
    const farby = ['#ff6b66', '#fffff', 'fafaaa', '#fazfff' ]
}