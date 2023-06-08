const urlId = new URL(location.href).searchParams.get('id');

const mainWrapper = document.getElementsByClassName('wrapper')[0];
const getDetails = async () => {
    try{
        await fetch(`https://jsonplaceholder.typicode.com/users/${urlId}`)
            .then(response => response.json())
            .then(user => {
                const userExplorer = (user) => {
                    for (let item in user) {

                        if (typeof user[item] !== 'object') {
                            const p = document.createElement('p');
                            p.innerText = `${item} - ${user[item]}`;
                            mainWrapper.appendChild(p);
                        } else {
                            const p = document.createElement('p');
                            p.innerText = `${item}: `;
                            mainWrapper.appendChild(p);
                            userExplorer(user[item]);
                        }
                    }
                    document.body.appendChild(mainWrapper);
                }
                userExplorer(user);
            })

    }catch (e){
        console.log(e);
    }
}
getDetails();