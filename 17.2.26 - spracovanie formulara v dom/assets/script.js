const form = document.getElementById("newsletterForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    const menoInput = document.getElementById("meno");
    const meno = menoInput.value;

    const vsetkyCheckboxy = document.querySelectorAll('input[type="checkbox"]');

    const poleCheckboxov = Array.from(vsetkyCheckboxy);

    const zaskrtnutie = poleCheckboxov.map(checkbox => checkbox.value)

    console.log(poleCheckboxov);
}
