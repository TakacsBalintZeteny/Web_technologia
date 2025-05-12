const ApiLink = "https://iit-playground.arondev.hu/api/GJWXEU/car";
const GitHubToken = "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";


const buttonListazas = document.querySelector('#btnListazas'); //eseménykezelés listázás
buttonListazas.addEventListener('click', () => {
    listazas();
})

const buttonHozzaadas = document.querySelector('#btnHozzaadas'); //eseménykezelés hozzáadás
buttonHozzaadas.addEventListener('click', () => {
    hozzaadas();
})

const buttonModositas = document.querySelector("#btnModosítas"); //eseménykezelés módosítás
buttonModositas.addEventListener('click', () => {
    modositas();
})

const buttonTorles = document.querySelector("#btnTorles"); //eseménykezelés törlés
buttonTorles.addEventListener('click', () => {
    torles();
})


//listazas
function listazas() {
    //betöltés
    fetch(ApiLink, {
        headers: {
            'Authorization': 'Bearer ' + GitHubToken
        }
    })
        .then(res => res.json())
        .then(cars => {
            const result = document.getElementById("car-list");
            result.innerHTML = "";

            //kiírás
            cars.forEach(car => {
                card = document.createElement("div");
                card.className = "car-card";

                card.innerHTML = `
                    <h2>${car.id}. ${car.brand} ${car.model}</h2>
                `;

                card.addEventListener("click", () => adatlap(car.id));
                result.appendChild(card);
        })
        .catch(err => {
            console.error("Hiba a lista lekérdezésekor: ", err);
            console.log("Hiba a lista lekérdezésekor: ", err);
        })
    })


}


//adatok
function adatlap(carId) {

    //betöltés
    fetch(`${ApiLink}/${carId}`)
        .then(res => res.json())
        .then(car => {
            const result = document.getElementById("car-details");
            result.classList.remove("hidden");

            //kiírás
            result.innerHTML = `
                <h2>${car.brand} ${car.model}</h2>
                <p><strong>Tulajdonos:</strong> ${car.owner}</p>
                ${car.electric ? " " : "<p><strong>Üzemanyag fogyasztás: </strong>" + (Math.round(car.fuelUse * 100) / 100) +" l/100Km</p>"} 
                <p><strong>Üzembe helyezés időpontja:</strong> ${car.dayOfCommission}</p>
                <p><strong>Meghajtás:</strong> ${car.electric ? "elektromos" : "nem elektromos"}</p>
            `; //kerekítés és elektromos ellenőrzés
        })
        .catch(err => {
            console.error("Hiba az autó adatainak lekérdezésekor: ", err);
            console.log("Hiba az autó adatainak lekérdezésekor: ", err);
        })
}


//Hozzáadás
function hozzaadas() {
    const idElem = document.querySelector("#hozzáadásID");
    const id2 = idElem.value;
    const gyartoElem = document.querySelector("#hozzáadásBrand");
    const gyarto = gyartoElem.value;
    const modellElem = document.querySelector("#hozzáadásModel");
    const modell = modellElem.value;
    const fogyasztasElem = document.querySelector("#hozzáadásFuelUse");
    const fogyasztas = fogyasztasElem.value;
    const tulajElem = document.querySelector("#hozzáadásOwner");
    const tulaj = tulajElem.value;
    const evElem = document.querySelector("#hozzáadásYear");
    const ev = evElem.value;
    const elektromosElem = document.querySelector("#hozzáadásElectric");
    const elektromos = elektromosElem.value;

    const car = {
        id: id2,
        brand: gyarto,
        model: modell,
        fuelUse: fogyasztas,
        owner: tulaj,
        dayOfCommission: ev,
        electric: elektromos
    };
        fetch(ApiLink, {
        headers: {
            'Authorization': 'Baerer ' + GitHubToken,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(car)
    })
}


function torles() {
    const torlesElem = document.querySelector("#torlendoID");

        fetch(`${ApiLink}/${torlesElem}`, {
            headers: {
                'Authorization': 'Bearer' + GITHUB_ACCESS_TOKEN
            },
            method: 'DELETE' 
        
        })
}