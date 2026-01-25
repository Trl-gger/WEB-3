const vahaInput = document.getElementById('vaha');
const vyskaInput = document.getElementById('vyska');
const bmiElement = document.getElementById('bmi');
const tlacidlo = document.getElementById('vypocitaj');

tlacidlo.addEventListener('click', () => {
    const vaha = parseFloat(vahaInput.value);
    const vyska = parseFloat(vyskaInput.value);
    const bmi = vaha / (vyska * vyska);


    let kategoria = "";
    if (bmi < 18.5) kategoria = "Podváha";
    else if (bmi < 25) kategoria = "Normálna váha";
    else if (bmi < 30) kategoria = "Nadváha";
    else kategoria = "Obezita";

    bmiElement.textContent = "Tvoje BMI je " + bmi + " (" + kategoria + ")";
}); 