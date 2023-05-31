//----------------------------------------------------------------------------------------------------------------------
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//----------------------------------------------------------------------------------------------------------------------
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//----------------------------------------------------------------------------------------------------------------------
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// users.forEach(value => JSON.parse(JSON.stringify(value.address)));
//----------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
//----------------------------------------------------------------------------------------------------------------------
// for (let item of users) {
//     const div = document.createElement('div');
//     div.innerHTML = `<h2>${item.age} - ${item.name}</h2></br> <h3>${item.status}</h3></br><p>${item.address.city} / ${item.address.country} / ${item.address.street} / ${item.address.houseNumber}</p>`
//     document.body.appendChild(div);
// }
//----------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//----------------------------------------------------------------------------------------------------------------------
// function explorer(array) {
//     for (let item of array) {
//         for (let field in item) {
//             if (typeof item[field] !== 'object') {
//                 const div = document.createElement('div');
//                 div.innerText = `${field} - ${item[field]}`;
//                 document.body.appendChild(div);
//             } else if (typeof item[field] === 'object') {
//                 explorer([item[field]]);
//             }
//         }
//     }
// }
// explorer(users);
//----------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//----------------------------------------------------------------------------------------------------------------------
// for (let item of users) {
//     const div = document.createElement('div');
//
//     const divName = document.createElement('div');
//     divName.innerText = `Name: ${item.name}`;
//
//     const divAge = document.createElement('div');
//     divAge.innerText = `Age: ${item.age}`;
//
//     const divStatus = document.createElement('div');
//     divStatus.innerText = `Status: ${item.status}`;
//
//     const divAddress = document.createElement('div');
//     divAddress.innerText = 'Address: '
//     const ul = document.createElement('ul');
//
//     const liCity = document.createElement('li');
//     liCity.innerText = `${item.address.city}`;
//
//     const liCountry = document.createElement('li');
//     liCountry.innerText = `${item.address.country}`;
//
//     const liStreet = document.createElement('li');
//     liStreet.innerText = `${item.address.street}`;
//
//     const liHouseNumber = document.createElement('li');
//     liHouseNumber.innerText = `${item.address.houseNumber}`;
//
//     ul.append(liCity,liCountry,liStreet,liHouseNumber);
//     divAddress.appendChild(ul);
//
//     div.append(divName,divAge,divStatus,divAddress);
//
//     document.body.appendChild(div)
// }
//----------------------------------------------------------------------------------------------------------------------
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------