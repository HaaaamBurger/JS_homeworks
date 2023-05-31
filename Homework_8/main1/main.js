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
// localStorage.setItem('number','1');
//
// window.onload = function () {
//     let storageNumber = JSON.parse(localStorage.getItem('number')) || [];
//     localStorage.setItem('number',JSON.stringify(storageNumber + 1));
// }
