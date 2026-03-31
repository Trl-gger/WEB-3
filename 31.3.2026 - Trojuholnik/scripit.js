input1 = document.getElementById('input1');
input2 = document.getElementById('input2');
input3 = document.getElementById('input3');


const button = document.getElementById("check");

button.addEventListener("click", () => {
    const PrveCislo = Number(input1.value);
    const DruheCislo = Number(input2.value);
    const TretieCislo = Number(input3.value);


    if (PrveCislo == DruheCislo && PrveCislo == TretieCislo) {
        console.log("rovnostranny")
    } 
    else if (PrveCislo == DruheCislo && PrveCislo !== TretieCisl)
});


function zobrazSpravu(text){
    const spravaElementu = document.getElementById("sprava");


    const odstavec = document.createElement('p');

    odstavec.textContent = text;

    spravaElementu.appendChild(odstavec);

    spravaElementu.className = 'sprava popis';

}



