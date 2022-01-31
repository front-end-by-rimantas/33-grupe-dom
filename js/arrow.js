const pirmas = 7;
const antras = 5;

// function expresion - iprasta funkcijos forma/sintakse
function sudeti(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sudeti(pirmas, antras)}`);

// anonimine funkcija, priskirta kintamajam
const atimti = function (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${atimti(pirmas, antras)}`);

// arrow function - rodykline funkcija
const padalinti = (a, b) => {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${padalinti(pirmas, antras)}`);

// arrow function - rodykline funkcija
// jei logikos bloke {} yra tik 1 salyga (statement), tai
// galima nerasyti {} ir return
const sudauginti = (a, b) => a * b;
console.log(`${pirmas} * ${antras} = ${sudauginti(pirmas, antras)}`);

// arrow function - rodykline funkcija
// jei parametru bloke () yra tik 1 parametras, tai
// galima nerasyti ()
const kvadratu = a => a ** 2;
console.log(`${pirmas}^2 = ${kvadratu(pirmas)}`);
console.log(`${antras}^2 = ${kvadratu(antras)}`);

/*
Funkcijos:
- masyvo ilgi
- teksto ilgi
- pirma teksto raide
- paskutine teksto raide
- vidurine teksto raide
- triju skaiciu vidurki
- pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [Vardenis]!"
*/