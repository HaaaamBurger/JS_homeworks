// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//---------------------------------------------------
// const badWords = ['телепень','дурак','дибіл','тарас'];
// const f1 = document.forms.f1;
//
// f1.onsubmit = (e) => {
//     e.preventDefault();
//     let wordValue = f1.valueWord.value;
//
//     badWords.find(word => word === wordValue ? alert('Bad Word!') : null);
//     f1.valueSentence.value = '';
// }
//---------------------------------------------------
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//---------------------------------------------------
// const badWords = ['телепень','дурак','дибіл','тарас'];
// const f2 = document.forms.f2;
//
// f2.onsubmit = (e) => {
//     e.preventDefault();
//     const valueSentence = f2.valueSentence.value.split(' ');
//     let arrWords = [];
//
//     for (let i = 0; i < valueSentence.length; i++) {
//         for (let j = 0; j < badWords.length; j++) {
//             if (valueSentence[i] === badWords[j]) {
//                 arrWords.push(valueSentence[i]);
//             }
//         }
//     }
//     f2.valueSentence.value = '';
//     arrWords.length ? console.log(arrWords) : console.log('No bad words!');
// }
//---------------------------------------------------
// - Создайте меню, которое раскрывается/сворачивается при клике
//---------------------------------------------------
// const mainMenu  = document.getElementsByClassName('mainMenu')[0];
// const buttonMenu = document.getElementsByClassName('buttonMenu')[0];
// const navElements = document.getElementsByClassName('navElements')[0];
//
// const div_1 = document.createElement('div');
// div_1.innerText = '1';
// div_1.classList.add('buttonMenu','specialClass');
// const div_2 = document.createElement('div');
// div_2.innerText = '2';
// div_2.classList.add('buttonMenu','specialClass');
// const div_3 = document.createElement('div');
// div_3.innerText = '3';
// div_3.classList.add('buttonMenu','specialClass');
// const div_4 = document.createElement('div');
// div_4.innerText = '4';
// div_4.classList.add('buttonMenu','specialClass');
// const div_5 = document.createElement('div');
// div_5.innerText = '5';
// div_5.classList.add('buttonMenu','specialClass');
// div_5.style.borderRadius = '0 0 3px 3px';
//
// let counter = 0;
// mainMenu.onclick = () => {
//     if (counter % 2 === 0) {
//         navElements.append(div_1,div_2,div_3,div_4,div_5);
//         counter++;
//         console.log(counter);
//     } else {
//         div_1.remove();
//         div_2.remove();
//         div_3.remove();
//         div_4.remove();
//         div_5.remove();
//         counter++;
//         console.log(counter);
//     }
// }


//---------------------------------------------------