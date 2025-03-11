function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let randomSzam = getRandomInt(0, 1000000);
let szam;

alert("Kezdés!");

for (let i = 0; i < 20; i++)
{
    szam = prompt("Tippelj!");
    szam = parseInt(szam);


    while (isNaN(szam) == true); {
        szam = prompt("Tippelj!");
        szam = parseInt(szam);
      }


    if (szam == randomSzam)
    {
        alert("Gratulálok, ${szam} lépésből eltaláltad!");
        break;
    }
    else if (szam > randomSzam)
    {
        alert("${szam} tipp nem talált: A megoldás kisebb.");
    }
    else
    {
        alert("${szam} tipp nem talált: A megoldás nagyobb");
    }

}

alert("Vége!");
