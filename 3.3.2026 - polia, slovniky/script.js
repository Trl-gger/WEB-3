const mena = ["Jano", "Fero", "Ignác"];
mena.splice(1,2);
mena.push("Jeremy", "George");

cisla = [5,4,8,9,3,2];
/**for (let i = 0, i < mena.lenght; i++){
    console.log(mena[i]);
} */

for (let i=0; i < cisla.length; i++){
    sucet = 0;
    sucet = sucet+ cisla[i];
    console.log ('pole:' + cisla[i]);
    console.log('sucet:' + sucet);
    }
    console.log(sucet);