//----------------------------------------------------------------------------------------------------------------------
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,4,5,'a','b','c','d','e',true,false,true,false,true];
// for (let item of main) {
//     console.log(item);
// }
//----------------------------------------------------------------------------------------------------------------------
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,'a','b','c',true,false,true];
// for (let i = 0; i < main.length; i++) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//----------------------------------------------------------------------------------------------------------------------
// let main = [2,17,13,6,22,31,45,66,100,-18];
//----------------------------------------------------------------------------------------------------------------------
// 1. перебрати його циклом while
//----------------------------------------------------------------------------------------------------------------------
// let i = 0;
// while (i < main.length) {
//     console.log(main[i]);
//     i++;
// }
//----------------------------------------------------------------------------------------------------------------------
// 2. перебрати його циклом for
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length; i++) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// let i = 1;
// while (i < main.length){
//     console.log(main[i]);
//     i += 2;
// }
//----------------------------------------------------------------------------------------------------------------------
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i < main.length; i += 2) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// let i = 0;
// while (i < main.length) {
//     if (main[i] % 2 === 0) {
//         console.log(main[i]);
//     }
//     i++;
// }
//----------------------------------------------------------------------------------------------------------------------
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length; i++) {
//     if (main[i] % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 7. замінити кожне число кратне 3 на слово "okten"
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length; i++) {
//     if (main[i] % 3 === 0) {
//         main[i] = 'okten';
//     }
// }
// console.log(main);
//----------------------------------------------------------------------------------------------------------------------
// 8. вивести масив в зворотньому порядку.
//----------------------------------------------------------------------------------------------------------------------
// for (let i = main.length - 1; i >= 0; i--) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//----------------------------------------------------------------------------------------------------------------------
// 1. перебрати його циклом while
//----------------------------------------------------------------------------------------------------------------------
// let i = main.length - 1;
// while (i >= 0) {
//     console.log(main[i]);
//     i--;
// }
//----------------------------------------------------------------------------------------------------------------------
// 2. перебрати його циклом for
//----------------------------------------------------------------------------------------------------------------------
// for (let i = main.length - 1; i >= 0; i--) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// let i = main.length - 1;
// while (i >= 0){
//     console.log(main[i]);
//     i -= 2;
// }
//----------------------------------------------------------------------------------------------------------------------
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// for (let i = main.length - 1; i >= 0; i -= 2) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// let i = main.length - 1;
// while (i >= 0) {
//     if (main[i] % 2 === 0) {
//         console.log(main[i]);
//     }
//     i--;
// }
//----------------------------------------------------------------------------------------------------------------------
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// for (let i = main.length - 1; i >= 0; i--) {
//     if (main[i] % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 7. замінити кожне число кратне 3 на слово "okten"
//----------------------------------------------------------------------------------------------------------------------
// for (let i = main.length - 1; i >= 0; i--) {
//     if (main[i] % 3 === 0) {
//         main[i] = 'okten'
//     }
// }
// console.log(main);
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,4,5,6,7,8,9,10];
// for (let item of main) {
//     console.log(item);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//----------------------------------------------------------------------------------------------------------------------
// let main = ['q','w','e','r','t','y','u','i','o','p'];
// for (let item of main) {
//     console.log(item);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,'a','b','c',true,false,true,{}];
// for (let item of main) {
//     console.log(item);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,'a','b','c',true,false,true,false];
// for (let item of main) {
//     if (typeof item === "boolean"){
//         console.log(item);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,'a','b','c',true,false,true,false];
// for (let item of main) {
//     if (typeof item === 'number') {
//         console.log(item);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,'a','b','c',true,false,true,false];
// for (let item of main) {
//     if (typeof item === 'string') {
//         console.log(item);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//----------------------------------------------------------------------------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// for (let i = 0; i < 10; i++) {
//     main[i] = prompt('Input something!');
// }
// console.log(main);
//----------------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i}`);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} | `);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`${i} | `);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`${i} | `);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i < 100; i += 2) {
//     console.log(i);
//     document.write(`${i} | `);
// }
//----------------------------------------------------------------------------------------------------------------------
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
//----------------------------------------------------------------------------------------------------------------------
// let books = [
//     {title: 'Fairy Tail', pages: 356, authors: ['Hiro Mashima'], genres: ['Adventures','Fantasy']},
//     {title: 'Naruto', pages: 750, authors: ['Kishimoto Masashi',"Kishimoto's students"], genres: ['Martial arts','Adventure','Fantasy']},
//     {title: 'One Piece', pages: 1060, authors: ['Oda Eishiro'], genres: ['Adventure','Fantasy']},
//     {title: 'Black Clover', pages: 190, authors: ['Yuki Tabata'], genres: ['Adventure','Fantasy']},
//     {title: 'Bleach', pages: 356, authors: ['Kubo Tayto'], genres: ['Comedy', 'Drama', 'Mystery', 'Action', 'Fantasy']},
// ];
//----------------------------------------------------------------------------------------------------------------------
// -знайти наібльшу книжку.
// let maxPages = ['',0];
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//
//     if (maxPages[1] < book.pages) {
//         maxPages[1] = book.pages;
//         maxPages[0] = book.title;
//     }
// }
// console.log(maxPages);
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки з найбільшою кількістю жанрів
//----------------------------------------------------------------------------------------------------------------------
// let maxGenres = ['',0];
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//
//     if (maxGenres[1] < book.genres.length) {
//         maxGenres[1] = book.genres.length;
//         maxGenres[0] = book.title;
//     }
// }
// console.log(maxGenres);
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки з найдовшою назвою
//----------------------------------------------------------------------------------------------------------------------
// let maxTitle = ['',0];
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (maxTitle[1] < book.title.length) {
//         maxTitle[1] = book.title.length;
//         maxTitle[0] = book.title;
//     }
// }
// console.log(maxTitle);
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки які писали 2 автори
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//
//     if (book.authors.length === 2) {
//         console.log(book);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки які писав 1 автор
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//
//     if (book.authors.length === 1) {
//         console.log(book);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------