// Example URL: http://127.0.0.1:5500/?animal=dog

const params = new URLSearchParams(window.location.search);
const isDog = params.get('animal') == 'dog';

const nameElem = document.getElementById('name');
console.log(nameElem);

nameElem.textContent = isDog ? DOG_INFO.name : CAT_INFO.name;

// <img src="....." title="" />

const imgElem = document.createElement('img');
imgElem.setAttribute('src', isDog ? DOG_INFO.imageUrl : CAT_INFO.imageUrl);
imgElem.setAttribute('title', nameElem.textContent);

const descElem = document.querySelector('#description');
descElem.appendChild(imgElem);
descElem.innerHTML += isDog ? DOG_INFO.descriptionHtml : CAT_INFO.descriptionHtml;

const funFactsElem = document.querySelector('#funfacts');
const fun = isDog ? DOG_INFO.funFacts.shift() : CAT_INFO.funFacts.shift();
const funFactLi = document.createElement('li');
funFactLi.textContent = fun;
funFactLi.classList.add('funfact');
funFactsElem.appendChild(funFactLi);

const newFunFactBtn = document.querySelector('#gomb');
newFunFactBtn.addEventListener('click', () => {
    const fun = isDog ? DOG_INFO.funFacts.shift() : CAT_INFO.funFacts.shift();
    const funFactLi = document.createElement('li');
    funFactLi.textContent = fun;
    funFactLi.classList.add('funfact');
    funFactsElem.appendChild(funFactLi);

    if((isDog && DOG_INFO.funFacts.length == 0) || (!isDog && CAT_INFO.funFacts.length == 0))
    {
        newFunFactBtn.remove();
    }
});