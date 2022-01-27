const titleDOM = document.querySelector('h1');
const listDOM = document.querySelector('ul');
const darzovesDOM = document.querySelectorAll('ul > li > span');

const title = titleDOM.innerText;
const newTitle = title + ' yra apvalus';
console.log(newTitle);

const darzoviuPavadinimai = [];
for (let i = 0; i < darzovesDOM.length; i++) {
    const darzeveDOM = darzovesDOM[i];
    darzoviuPavadinimai.push(darzeveDOM.innerText);
}
console.log(darzoviuPavadinimai);

const darzoviuSuvestine = `Suvestine: ${darzoviuPavadinimai.join(', ')}.`;
console.log(darzoviuSuvestine);