//======================================================================================================================
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//======================================================================================================================
// const form = document.form1;
// const rowCount = document.form1.rowCount;
// const columnCount = document.form1.columnCount;
// const value = document.form1.value;
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     const table = document.getElementsByClassName('generalTable')[0];
//
//     for (let i = 0; i < +columnCount.value; i++) {
//         const tr = document.createElement('tr');
//
//         for (let j = 0; j < +rowCount.value; j++) {
//             const th = document.createElement('th');
//             th.innerText = `${value.value}`;
//             tr.appendChild(th);
//         }
//         table.appendChild(tr);
//     }
// }
//======================================================================================================================
//     *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//======================================================================================================================
const a = document.getElementById('setMoney');

window.onload = () => {
    let generalMount = JSON.parse(localStorage.getItem('money')) || 100;
    a.innerHTML = `${generalMount}`;
    const mainTime = new Date().getTime();

    let openTime = JSON.parse(localStorage.getItem('openTime')) || [];
    openTime.push(mainTime);

    if (openTime.length > 1) {
        if (openTime[openTime.length - 1] - openTime[openTime.length - 2] >= 100) {
            generalMount += 20;
            a.innerHTML = `${generalMount}`;
            localStorage.setItem('money', JSON.stringify(generalMount));
        }
    }

    localStorage.setItem('openTime', JSON.stringify(openTime));

}


//======================================================================================================================