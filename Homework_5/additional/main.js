//----------------------------------------------------------------------------------------------------------------------
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
//----------------------------------------------------------------------------------------------------------------------
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//----------------------------------------------------------------------------------------------------------------------
// const cutString = (str, n) => {
//     let stringCase = [];
//     for (let i = 0; i < str.length; i += n) {
//         stringCase.push(str.substring(i, n));
//     }
//     return stringCase;
// }
// console.log(cutString('наслаждение', 3));
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//----------------------------------------------------------------------------------------------------------------------
// let str = 'Каждый охотник желает знать';
//
// const delete_characters = (str, length) => {
//     str.split(' ').forEach(word => word.length === length ? console.log(word) : null);
// }
// delete_characters(str, 6);
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//----------------------------------------------------------------------------------------------------------------------
// const insert_dash = (str) => {
//     return str.replaceAll(' ','-').toUpperCase();
// }
// console.log(insert_dash('HTML JavaScript PHP'));
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//----------------------------------------------------------------------------------------------------------------------
// const converter = (str) => {
//     return str.substring(0,1).toUpperCase() + str.substring(1);
// }
// console.log(converter('hello world!'));
//----------------------------------------------------------------------------------------------------------------------
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//----------------------------------------------------------------------------------------------------------------------
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// const nameConverter = (...name) => {
//     let nameContainer = [];
//     nameContainer.push(name[0].replace('..',' '));
//     nameContainer.push(name[1].replace('---',' '));
//     nameContainer.push(name[2].replace('__',' '));
//
//     return nameContainer;
// }
// console.log(nameConverter(n1,n2,n3));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//----------------------------------------------------------------------------------------------------------------------
// const randomRandint = () => {
//     let randintArr = [];
//     for (let i = 0; i < 100; i++) {
//         randintArr[i] = Math.floor(Math.random() * (100 - 0) + 0)
//     }
//     console.log(randintArr);
// }
// randomRandint();

//----------------------------------------------------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//----------------------------------------------------------------------------------------------------------------------
// const randomRandint = () => {
//     let randintArr = [];
//     for (let i = 0; i < 100; i++) {
//         randintArr[i] = Math.floor(Math.random() * (100 - 0) + 0)
//     }
//     return randintArr.sort((n1,n2) => n1 - n2);
// }
// console.log(randomRandint());
//----------------------------------------------------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//----------------------------------------------------------------------------------------------------------------------
// const randomRandint = () => {
//     let randintArr = [];
//     for (let i = 0; i < 100; i++) {
//         randintArr[i] = Math.floor(Math.random() * (100 - 0) + 0)
//     }
//     return randintArr.sort((n1,n2) => n1 - n2).filter(item => item !== 0 && item % 2 === 0);
// }
// console.log(randomRandint());
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//----------------------------------------------------------------------------------------------------------------------
// const converter = (text) => {
//     return text.split(' ').map(word => word.substring(0,1).toUpperCase() + word.substring(1)).join().replaceAll(',',' ');
// }
// console.log(converter('how are you?!'));
//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//----------------------------------------------------------------------------------------------------------------------
// const emailValidator = (email) => {
//     const validatorStatus = [{dog: false}, {dot: false}];
//
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === '@') {
//             validatorStatus[0].dog = true;
//         } else if (email[i] === '.' && email[i + 3]) {
//             validatorStatus[1].dot = true;
//         }
//     }
//     return validatorStatus[0].dog && validatorStatus[1].dot ? console.log('Validated!') : console.log('Validation failed ;(')
// }
// emailValidator('melnuk2004y@gmail.com');
//Мені майже вдалось зробити це завдання через reduce, але я не знав як там зробити цю дію email[i + 3], тому не зміг(
//----------------------------------------------------------------------------------------------------------------------
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//----------------------------------------------------------------------------------------------------------------------
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//----------------------------------------------------------------------------------------------------------------------
// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//----------------------------------------------------------------------------------------------------------------------
// const count = (str, stringsearch) => {
//     let letterCount = 0;
//     str.split('').forEach(value => value === stringsearch ? letterCount += 1 : null);
//     return letterCount;
// }
// console.log(count("Астрономия это наука о небесных объектах", 'о'));
//----------------------------------------------------------------------------------------------------------------------
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
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
//----------------------------------------------------------------------------------------------------------------------
// Варіант 1
// let maxPages = books.sort((a, b) => b.pages - a.pages);
// console.log(maxPages[0]);

// Варінт 2
// console.log(books.reduce((max, book) => Math.max(max, book.pages), 0));
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки з найбільшою кількістю жанрів
//----------------------------------------------------------------------------------------------------------------------
// console.log(books.reduce((max, book) => Math.max(max, book.genres.length), 0));
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки які писали 2 автори
//----------------------------------------------------------------------------------------------------------------------
// console.log(books.find(book => book.authors.length === 2));
//----------------------------------------------------------------------------------------------------------------------
// - знайти книжку/ки які писав 1 автор
//----------------------------------------------------------------------------------------------------------------------
// books.map(book => book.authors.length === 1 ? console.log(book) : null);
//----------------------------------------------------------------------------------------------------------------------
// - вісортувати книжки по кількості сторінок по зростанню
//----------------------------------------------------------------------------------------------------------------------
// console.log(books.sort((a, b) => a.pages - b.pages));
//----------------------------------------------------------------------------------------------------------------------