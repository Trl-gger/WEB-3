const pole = [2, 8, -20, 25, -10, 17, 15, 3]
let novePole = [];
for (let i = 0; i < pole.length; i++){
    if (pole[i] % 2 === 0 && pole[i] % 3 === 0) 
        novePole.push(i);
}