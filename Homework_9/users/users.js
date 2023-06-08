const mainWrapper = document.getElementsByClassName('wrapper')[0];
const getUsers = async () => {
    try{
        await fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => {
                user.forEach(value => {
                    const p = document.createElement('p');
                    const a = document.createElement('a');
                    p.innerText = `${value.id} - ${value.name}`;
                    a.innerText = 'Details';
                    a.setAttribute('href',`../user-details/user-details.html?id=${value.id}`);

                    mainWrapper.append(p,a);
                })
            document.body.appendChild(mainWrapper);
            })

    }catch (e) {
        console.log(e);
    }
}
getUsers();