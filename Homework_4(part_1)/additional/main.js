//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//----------------------------------------------------------------------------------------------------------------------
// function calc(...nums){
//     let minimum = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[i + 1]) {
//             minimum = nums[i + 1];
//         }
//     }
//     return minimum;
// }
//
// console.log(calc(34,3,32));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//----------------------------------------------------------------------------------------------------------------------
// function calc(...nums) {
//     let maximum = nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if (maximum < nums[i + 1]) {
//             maximum = nums[i + 1];
//         }
//     }
//     return maximum;
// }
//
// console.log(calc(3,123,2));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву
//----------------------------------------------------------------------------------------------------------------------
// function calc(array) {
//     let maximum = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (maximum < array[i + 1]) {
//             maximum = array[i + 1];
//         }
//     }
//     return maximum;
// }
//
// console.log(calc([2,123,3]));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//----------------------------------------------------------------------------------------------------------------------
// function calc(array) {
//     let average = 0;
//     for (let item of array) {
//         average += item;
//     }
//     return average / array.length;
// }
//
// console.log(calc([1, 2, 3, 1]));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//----------------------------------------------------------------------------------------------------------------------
// function calc(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i];
//         } else if (max < array[i]) {
//             max = array[i];
//         }
//     }
//     return `Min: ${min} Max: ${max}`;
// }
//
// console.log(calc([1, 2, 3, 4, 5]));
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
