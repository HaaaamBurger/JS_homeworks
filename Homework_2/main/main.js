// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//----------------------------------------------------------------------------------------------------------------------
// const main = [1,2,3,'a','b','c',true,false,{},[]];
// console.log(main[0],main[1],main[2],main[3],main[4],main[5],main[6],main[7],main[8],main[9]);
//----------------------------------------------------------------------------------------------------------------------
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//----------------------------------------------------------------------------------------------------------------------
// const japaneseBook = {
//     title: 'All about Japan',
//     pageCount: 356,
//     genre: 'history',
// }
// const jsBook = {
//     title: 'JavaScript',
//     pageCount: 221,
//     genre: 'science',
// }
// const spaceBook = {
//     title: 'Space Adventures',
//     pageCount: 560,
//     genre: ['adventures', 'science fiction'],
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//----------------------------------------------------------------------------------------------------------------------
// const onePiece_anime = {
//     title: 'One Piece',
//     pageCount: {pages: 1059, status: 'ongoing'},
//     genre: ['Adventure','Fantasy'],
//     authors: [
//         {name: 'Eiichiro Oda'},
//         {age: 48},
//     ]
// }
// const fairyTail_anime = {
//     title: 'Fairy Tail',
//     pageCount: 356,
//     genre: ['Adventure', 'Fantasy'],
//     authors: [
//         {name: 'Hiro Mashima'},
//         {age: 46},
//     ]
// }
// const naruto_anime = {
//     title: 'Naruto',
//     pageCount: 750,
//     genre: ['Adventure', 'Fantasy', 'Comedy'],
//     authors: [
//         {name: 'Masashi Kishimoto'},
//         {age: 48},
//     ]
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//----------------------------------------------------------------------------------------------------------------------
// const users = [
//     {name: 'Haruto', username: 'naruto_78', password: 48723},
//     {name: 'Yui', username: '_yuichanneru_', password: 98203},
//     {name: 'Souta', username: 'shootaOtaku', password: 45713},
//     {name: 'Hana', username: '#hanaMizu', password: 96726},
//     {name: 'Minato', username: 'fuenMinatosan', password: 71743},
//     {name: 'Ema', username: 'enmA', password: 55533},
//     {name: 'Riku', username: 'rikuMorty', password: 12729},
//     {name: 'Sakura', username: 'sakuraDaigaku', password: 28721},
//     {name: 'Kouki', username: 'Hikouki', password: 98929},
//     {name: 'Himari', username: 'shishiMaru', password: 11824},
// ]
// console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password)
//----------------------------------------------------------------------------------------------------------------------
// Логічні розгалуження:
//  - Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//----------------------------------------------------------------------------------------------------------------------
// - Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//----------------------------------------------------------------------------------------------------------------------
// let x = 0;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
//----------------------------------------------------------------------------------------------------------------------
// -Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//----------------------------------------------------------------------------------------------------------------------
// let time = 0;
// if (time <= 15) {
//     console.log('1/4');
// } else if (time > 15 && time <= 30) {
//     console.log('2/4');
// } else if (time > 30 && time <= 45) {
//     console.log('3/4');
// } else {
//     console.log('4/4');
// }
//----------------------------------------------------------------------------------------------------------------------
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//----------------------------------------------------------------------------------------------------------------------
// let day = 0;
// if (day <= 10) {
//     console.log('1/3');
// } else if (day > 10 && day <= 21) {
//     console.log('2/3');
// } else {
//     console.log('3/3');
// }
//----------------------------------------------------------------------------------------------------------------------
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//----------------------------------------------------------------------------------------------------------------------
// let user_chooser = +prompt('Input day of weak: 1-mon ,2-thu, ...');
// switch (user_chooser) {
//     case 1 :
//         alert('Work!');
//         break;
//     case 2 :
//         alert('Work!');
//         break;
//     case 3 :
//         alert('Conference');
//         break;
//     case 4 :
//         alert('Holiday');
//         break;
//     case 5 :
//         alert('Work!');
//         break;
//     case 6 :
//         alert('Weekend');
//         break;
//     case 7 :
//         alert('Weekend')
//         break;
//     default :
//         console.log('Error?!');
// }
//----------------------------------------------------------------------------------------------------------------------
// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//----------------------------------------------------------------------------------------------------------------------
// let f_1 = +prompt('Number 1: ');
// let f_2 = +prompt('Number 2: ');
//
// if (f_1 > f_2) {
//     alert('Number 1 > Number 2');
// } else if (f_1 < f_2) {
//     alert('Number 1 < Number 2');
// } else if (f_1 === f_2){
//     alert('Number 1 = Number 2');
// } else {
//     alert('Error!')
// }
//----------------------------------------------------------------------------------------------------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//----------------------------------------------------------------------------------------------------------------------
// let x = '';
// if (!!x === false) {
//     x = 'default';
//     console.log(x);
// } else {
//     console.log(x);
// }

//----------------------------------------------------------------------------------------------------------------------
// - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//----------------------------------------------------------------------------------------------------------------------
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log(`${coursesAndDurationArray[0].title} - Супер!`);
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log(`${coursesAndDurationArray[1].title} - Супер!`);
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log(`${coursesAndDurationArray[2].title} - Супер!`);
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log(`${coursesAndDurationArray[3].title} - Супер!`);
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log(`${coursesAndDurationArray[4].title} - Супер!`);
// }
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log(`${coursesAndDurationArray[5].title} - Супер!`);
// }
//----------------------------------------------------------------------------------------------------------------------