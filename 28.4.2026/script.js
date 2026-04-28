const teploty = [8, 2, 12, -1, 4, 0, 5];
let spoluTeploty = 0;

teploty.forEach(function(teplota) {
    spoluTeploty = spoluTeploty + teplota;
    console.log(spoluTeploty + "=" + teplota);

    if (teplota < 0) {
        console.log("mraz");
    } else if (teplota < 4) {
        console.log("chladno");
    } else {
        console.log("teplo");
    }
});

let priemer = spoluTeploty / teploty.length;
console.log(priemer);