//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//----------------------------------------------------------------------------------------------------------------------
// function calc(a,b) {
//     return a * b;
// }
// console.log(calc(2,2));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//----------------------------------------------------------------------------------------------------------------------
// function calc(r) {
//     return 3.14 * r ** 2;
// }
// console.log(calc(2));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//----------------------------------------------------------------------------------------------------------------------
// function calc(h,r) {
//     return (2 * 3.14) * (r * h);
// }
// console.log(calc(8,2));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
//----------------------------------------------------------------------------------------------------------------------
// function writer(...array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
// writer(1,2,3,4,5);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//----------------------------------------------------------------------------------------------------------------------
// function writer(text) {
//     document.write(`
//         <p>${text}</p>
//     `)
// }
// writer('Hello!');
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//----------------------------------------------------------------------------------------------------------------------
// function writer(text) {
//     document.write(`
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>
//     `)
// }
// writer('Hello!');
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//----------------------------------------------------------------------------------------------------------------------
// function writer(text,count) {
//     document.write('<ul>')
//     for (let i = 0; i < count; i++) {
//         document.write(`
//            <li>${text}</li>
//         `)
//     }
//     document.write('</ul>')
// }
// writer('Hello!',5);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,'a','b','c',true,false,true,5];
// function writer(array) {
//     document.write('<ul>');
//     for (let item of array) {
//         document.write(`
//             <li>${item}</li>
//         `);
//     }
//     document.write('</ul>');
// }
// writer(main);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//----------------------------------------------------------------------------------------------------------------------
// let main = [
//     {id: 1, name: 'Artem', age: 22},
//     {id: 2, name: 'Sasha', age: 19},
//     {id: 3, name: 'Taras', age: 19},
//     {id: 4, name: 'Maksim', age: 17},
//     {id: 5, name: 'Bogdan', age: 17}
// ]
// function writer(array) {
//     document.write('<div>');
//     for (let item of array) {
//         document.write(`
//             <h3>Id - ${item.id}</h3>
//             <p>Name - ${item.name} Age - ${item.age}</p>
//         `)
//     }
//     document.write('</div>');
// }
// writer(main);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву
//----------------------------------------------------------------------------------------------------------------------
// let main = [5,4,3,2,1];
// function calc(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i + 1]) {
//             min = array[i + 1];
//         }
//     }
//     return min;
// }
// console.log(calc(main));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,4,5];
// function calc(array) {
//     let sum = 0;
//     for (let item of array) {
//         sum += item;
//     }
//     return sum;
// }
//
// console.log(calc(main));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,4,5];
// function swapper(array, num_1, num_2) {
//     let second = array[num_2];
//     array[num_2] = array[num_1];
//     array[num_1] = second;
//     return array;
// }
//
// console.log(swapper(main,1,4));
//----------------------------------------------------------------------------------------------------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//----------------------------------------------------------------------------------------------------------------------
// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     let money = {sumUAH, currencyValues, exchangeCurrency};
//
//     return {
//         getValues: function () {
//             return {sumUAH,currencyValues, exchangeCurrency};
//         },
//         setValues: function () {
//             if (sumUAH > 0 && currencyValues && exchangeCurrency > 0) {
//                 return 'All values are appropriate!';
//             } else {
//                 return 'Something went wrong!';
//             }
//         },
//         calculateValues: function () {
//             if (this.setValues) {
//                 let result = sumUAH / exchangeCurrency;
//                 return `Value: ${sumUAH} UAH\nExchange currency: ${exchangeCurrency} ${currencyValues}\nResult: ${result} UAH`
//             } else {
//                 return 'Values are inappropriate!';
//             }
//         }
//     }
// }
// let manipulator = exchange(500, 'USD', 42);
// console.log(manipulator.calculateValues());
//----------------------------------------------------------------------------------------------------------------------