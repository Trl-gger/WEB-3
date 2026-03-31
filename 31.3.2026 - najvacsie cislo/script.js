let najvacsieCislo;
const PrveCisloInput = document.getElementById("cislo1");
const DruheCisloInput = document.getElementById("cislo2");
const TretieisloInput = document.getElementById("cislo3");

const button = document.getElementById("check");

button.addEventListener("click", () => {
    const PrveCislo = Number(PrveCisloInput.value);
    const DruheCislo = Number(DruheCisloInput.value);
    const TretieCislo = Number(TretieisloInput.value);


    if (PrveCislo > DruheCislo && PrveCislo > TretieCislo) {
        najvacsieCislo = (PrveCislo);
    } 
    else if (DruheCislo > PrveCislo && DruheCislo > TretieCislo) {
        najvacsieCislo = (DruheCislo);
    } 
    else {
        console.log("Najväčšie je tretie číslo:", TretieCislo);
        najvacsieCislo = (TretieCislo);
    }
});

function zobrazSpravu(text){
    const spravaElementu = document.getElementById("sprava");


    const odstavec = document.createElement('p');

    odstavec.textContent = text;

    spravaElementu.appendChild(odstavec);

    spravaElementu.className = 'sprava popis';

}

zobrazSpravu(`Najvacsie cislo je ` + najvacsieCislo);