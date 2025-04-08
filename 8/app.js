const GitHubToken = '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';     //ki kell venni, mielőtt feltölteném
const GITHUB_ACCESS_TOKEN = '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'; 

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
async function loadUserData() {
        const res = await fetch('https://api.github.com/user',
            {
                'Authorization': 'Bearer ' + GITHUB_ACCESS_TOKEN
            });
}

const user = await res.json();
sessionStorage.setItem('username', user.login);



const username = sessionStorage.getItem('username');
if (!username)
{
    loadUserData();
}