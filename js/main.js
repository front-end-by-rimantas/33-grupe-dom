const titleDOM = document.querySelector('h1');
const section1DOM = document.getElementById('darzoves');
const section2DOM = document.getElementById('technika');
const listDOM = document.querySelector('ul');
const darzovesDOM = document.querySelectorAll('ul > li > span');
const darzoviuSummaryDOM = document.querySelector('p');

titleDOM.innerText = 'Zuikio ūkis';
section1DOM.innerText = 'Daržovės';
section2DOM.innerText += ' (nauja)';

const darzoviuPavadinimai = [];
for (let i = 0; i < darzovesDOM.length; i++) {
    const darzoveDOM = darzovesDOM[i];
    darzoviuPavadinimai.push(darzoveDOM.innerText);
    darzoveDOM.innerText += ` (${darzoveDOM.innerText.length})`;
}
console.log(darzoviuPavadinimai);

const darzoviuSuvestine = `Suvestine: ${darzoviuPavadinimai.join(', ')}.`;
darzoviuSummaryDOM.innerText = darzoviuSuvestine;

section1DOM.classList.remove('section-title');
section2DOM.classList.remove('section-title');

section1DOM.classList.add('big-title');
section2DOM.classList.add('big-title');

section1DOM.classList.toggle('section-italic');
section2DOM.classList.toggle('section-italic');

// if (section1DOM.classList.contains('section-italic')) {
//     section1DOM.classList.remove('section-italic');
// } else {
//     section1DOM.classList.add('section-italic');
// }

// if (section2DOM.classList.contains('section-italic')) {
//     section2DOM.classList.remove('section-italic');
// } else {
//     section2DOM.classList.add('section-italic');
// }

const techListDOM = document.querySelector('ul:nth-of-type(2)');

const techList = ['Dviratis', 'Motociklas', 'Masina', 'Roges', 'Raketa'];

for (let i = 0; i < techList.length; i++) {
    techListDOM.innerHTML += `<li>${i}) ${techList[i]}</li>`;
}
