//======================================================================================================================
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//======================================================================================================================
// const button = document.getElementsByTagName('button')[0];
// button.onclick = function (e) {
//     e.preventDefault();
//
//     const name = document.form1.name.value;
//     const surname = document.form1.surname.value;
//     const age = document.form1.age.value;
//
//     const div = document.createElement('div');
//     div.style.marginTop = '25px';
//
//     const ul = document.createElement('ul');
//
//     const liName = document.createElement('li');
//     liName.innerText = `${name}`;
//
//     const liSurname = document.createElement('li');
//     liSurname.innerText = `${surname}`;
//
//     const liAge = document.createElement('li');
//     liAge.innerText = `${age}`;
//
//     ul.append(liName,liSurname,liAge)
//
//     div.appendChild(ul);
//     document.body.appendChild(div);
// }
//======================================================================================================================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//======================================================================================================================
// const number = JSON.parse(localStorage.getItem('number')) || 0;
// const div = document.createElement('div');
// div.innerHTML = `${number}`;
// document.body.appendChild(div);
//
// window.onload = function () {
//     localStorage.setItem('number', JSON.stringify(number + 1));
// }
//======================================================================================================================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//======================================================================================================================
// let main = [];
// for (let i = 1; i <= 100; i++) {
//     main.push({number: i});
// }
//
// window.onload = function () {
//     localStorage.setItem('number', '0');
// }
//
// let globalCounter = JSON.parse(localStorage.getItem('number') || 0);
// const nextButton = document.getElementsByTagName('button')[1];
// const prevButton = document.getElementsByTagName('button')[0];
//
// nextButton.onclick = function (e) {
//     if (globalCounter !== 90) {
//         globalCounter += 10;
//         localStorage.setItem('number', JSON.stringify(globalCounter));
//         console.log(globalCounter)
//     } else {
//         console.log('Maximum 100!');
//     }
// }
//
// prevButton.onclick = function () {
//     if (globalCounter !== 0) {
//         globalCounter -= 10;
//         localStorage.setItem('number', JSON.stringify(globalCounter));
//         console.log(globalCounter)
//     } else {
//         console.log('Minimum 0!');
//     }
// }
//
// const mainInfo = document.getElementsByClassName('info')[0];
// for (let i = JSON.parse(localStorage.getItem('number') || 0); i < 10 + JSON.parse(localStorage.getItem('number') || 0); i++) {
//     const p = document.createElement('p');
//     p.innerHTML = `${main[i].number}`;
//     mainInfo.appendChild(p);
// }
//======================================================================================================================
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//======================================================================================================================
// const button = document.getElementsByTagName('button')[0];
// button.onclick = function () {
//     const id = document.getElementById('text');
//     id.remove()
// }
//======================================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//======================================================================================================================
// const age = document.form1['age'];
// const form = document.form1;
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (age.value < 18) {
//         console.log('> 18')
//     } else {
//         console.log('<= 18')
//     }
// }
//======================================================================================================================


