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
// const addElements = () => {
//     navElements.append(div_1,div_2,div_3,div_4,div_5);
//     counter++;
// }
// const removeElements = () => {
//     navElements.innerHTML = '';
//     counter++;
// }
//
// mainMenu.onclick = () => {
//     (counter % 2 === 0) ? addElements() : removeElements();
// }
//---------------------------------------------------
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//---------------------------------------------------
// const comments = [
//     {title: 'A powerful argument!', body: 'I commend you for your quick thinking.'},
//     {title: 'Good for you', body: 'Phenomenal'},
//     {title: 'Fine job', body: 'Now you\'ve figured it out.'},
//     {title: 'I appreciate your cooperation.', body: 'Right on target'},
//     {title: 'Brilliant', body: 'I noticed that you got right down to work.'},
//     {title: 'Desirable', body: 'It looks like you\'ve put a lot of work into this.'},
//     {title: 'Excellent', body: 'Keep up the good work.'},
//     {title: 'Astounding', body: 'I like the way you\'ve handled this.'},
//     {title: 'Fantastic', body: 'Nice going'},
//     {title: 'First-class', body: 'Oh, that looks like you\'re ready for grade!\n'},
// ];
// const commentWrapper = document.getElementsByClassName('commentWrapper')[0];
//
//
// comments.forEach(comment => {
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');
//     h3.innerText = `${comment.title}`;
//
//     const commentInfo = document.createElement('div');
//     const p = document.createElement('p');
//     p.innerText = `${comment.body}`;
//     const button = document.createElement('button');
//     button.innerText = 'Hide';
//     commentInfo.append(p,button);
//
//     let counter = 0;
//
//     const hideInfo = () => {
//         button.innerText = 'Show';
//         p.innerText = '';
//         counter++;
//     }
//     const showInfo = () => {
//         button.innerText = 'Hide';
//         p.innerText = `${comment.body}`;
//         counter++;
//     }
//
//     button.onclick = () => {
//         (counter % 2 === 0) ? hideInfo() : showInfo();
//     }
//
//     div.append(h3, commentInfo);
//     document.body.appendChild(div);
// })
//---------------------------------------------------