//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//----------------------------------------------------------------------------------------------------------------------
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const user = [
//     new User(1, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(2, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(3, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(4, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(5, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(6, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(7, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(8, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(9, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
//     new User(10, 'Sanya', 'Melnyk', 'kunlem2004y@gmail.com', '0682279237'),
// ];
// console.log(user);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//----------------------------------------------------------------------------------------------------------------------
// let filteredUser = user.filter(value => value.id % 2 === 0);
// console.log(filteredUser);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//----------------------------------------------------------------------------------------------------------------------
// console.log(filteredUser.sort((a, b) => a.id - b.id));
//----------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//----------------------------------------------------------------------------------------------------------------------
// function Client(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let main = [
//     new Client(1,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange', 'cucumber']),
//     new Client(2,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'cucumber']),
//     new Client(3,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange', 'cucumber','pear']),
//     new Client(4,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange', 'cucumber','guava','plum']),
//     new Client(5,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana']),
//     new Client(6,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange', 'cucumber']),
//     new Client(7,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange']),
//     new Client(8,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange', 'cucumber', 'pineapple']),
//     new Client(9,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana']),
//     new Client(10,'Sanya', 'Melnuk', 'kunlem2004y@gmail.com', '0682279237', ['banana', 'orange', 'cucumber']),
// ];
// console.log(main);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//----------------------------------------------------------------------------------------------------------------------
// console.log(main.sort((a, b) => a.order.length - b.order.length));
//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//----------------------------------------------------------------------------------------------------------------------
// function Car(model, developer, year, maxSpeed, volume) {
//     this.model = model;
//     this.developer = developer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`
//             Model: ${this.model}
//             Developer: ${this.developer}
//             Year: ${this.year}
//             Max Speed: ${this.maxSpeed}
//             Volume: ${this.volume}
//         `)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > this.maxSpeed) {
//             this.maxSpeed = newSpeed;
//             console.log(`New speed: ${this.maxSpeed} km/h`);
//         } else {
//             console.log(`Your value: ${newSpeed} km/h - Current max speed: ${maxSpeed} km/h`);
//         }
//     };
//     this.changeYear = function (newValue) {
//         if (newValue) {
//             this.year = newValue;
//             console.log(`New year is ${this.year}`);
//         } else {
//             console.log('Error!');
//         }
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// const car = new Car('X', 'Tesla', '2016', 250, 'Electro');

//----------------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//----------------------------------------------------------------------------------------------------------------------
// class Car {
//     constructor(model, developer, year, maxSpeed, volume) {
//         this.model = model;
//         this.developer = developer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info() {
//         for (let item in this) {
//             console.log(`${item.substring(0,1).toUpperCase() + item.substring(1)} - ${this[item]}`);
//         }
//     };
//     increaseMaxSpeed(newSpeed) {
//         if (newSpeed > this.maxSpeed) {
//             this.maxSpeed = newSpeed;
//             console.log(`New speed: ${this.maxSpeed} km/h`)
//         } else {
//             console.log(`Your value: ${newSpeed} km/h - Current max speed: ${this.maxSpeed} km/h`);
//         }
//     };
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(`New year is ${this.year}`);
//     };
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(this);
//     }
// }
// const car = new Car('X', 'Tesla', '2016', 250, 'Electro');
//----------------------------------------------------------------------------------------------------------------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//----------------------------------------------------------------------------------------------------------------------
// function Cinderella(name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let Cinderellas = [
//     new Cinderella('Ema', '45', 34),
//     new Cinderella('Yui', '23', 35),
//     new Cinderella('Mio', '12', 31),
//     new Cinderella('Nagasa', '65', 40),
//     new Cinderella('Mei', '87', 25),
//     new Cinderella('Karin', '19', 28),
//     new Cinderella('Hina', '25', 58),
//     new Cinderella('Kanna', '28', 37),
//     new Cinderella('Yuuri', '20', 39),
//     new Cinderella('Mana', '16', 23),
// ];
// class Prince{
//     constructor(name,age,heel) {
//        Cinderella.apply(this,arguments);
//     }
// }
// const prince = new Prince('Hihimaru','24',28);

// for (let item of Cinderellas) {
//     if (item.footSize === prince.footSize) {
//         console.log(item);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//----------------------------------------------------------------------------------------------------------------------
// console.log(Cinderellas.find(value => value.footSize === prince.footSize));
//----------------------------------------------------------------------------------------------------------------------