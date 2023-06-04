// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const body = document.getElementsByTagName('body')[0];

const classArr = [];

function getAllClasses (htmlElement) {
    for (let i = 0; i < htmlElement.length; i++) {
        if (htmlElement[i].classList.length > 0) {
            classArr.push({name: htmlElement[i].tagName, classes: [...htmlElement[i].classList]})
        }
        if (htmlElement[i].children.length > 0) {
            getAllClasses(htmlElement[i].children);
        }
    }
}
getAllClasses(body.children);
console.log(classArr);
