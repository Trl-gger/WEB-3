const pole = [2, 8, 7, 12, 5, 6, 2721, 215];
let parne = [];
let neparne = [];

function zobrazSpravu(text) {
    const spravaElementu = document.getElementById("sprava");

    const odstavec = document.createElement('p');
    odstavec.textContent = text;

    spravaElementu.appendChild(odstavec);
    spravaElementu.className = 'sprava popis';
}

for (let i = 0; i < pole.length; i++) {
    if (pole[i] % 2 === 0) {
        parne.push(pole[i]);
    } else {
        neparne.push(pole[i]);
    }
}
zobrazSpravu("Vsetky cisla = " + pole.join(", "));
zobrazSpravu("Párne čísla =  " + parne.join(", "));
zobrazSpravu("Nepárne čísla =  " + neparne.join(", "));