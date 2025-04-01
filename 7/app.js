const GitHubToken = ' ';     //ki kell venni, mielőtt feltölteném

function loadNav(){
    fetch('nav.html') //aszinkron módon fut, elindul a háttérben, lehet közben mást is csinálni
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml)
        })

        .catch(err => console.error(err)); //hibakezelés
}

loadNav();