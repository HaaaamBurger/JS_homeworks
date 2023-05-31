const data = JSON.parse(localStorage.getItem('session'));

const h2 = document.createElement('h2');
h2.innerHTML = 'Session time:';

const mainWrapper = document.createElement('div');

// const backLink = document.createElement('a');
// backLink.document.createAttribute('link');
// backLink.value = 'index.html'

for (let item of data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.innerHTML = `${item.day} - ${item.time}`
    ul.appendChild(li)

    mainWrapper.appendChild(ul);
}
document.body.append(h2,mainWrapper);


