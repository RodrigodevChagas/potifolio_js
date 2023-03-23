const ul = document.querySelector('.ul');

function getApiGitHub() {
    const url = 'https://api.github.com/users/RodrigodevChagas/repos';
    fetch(url)
      .then( async response =>
        {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            var data =  await response.json();
            data.map(item =>{
                const li = document.createElement('li');
                li.innerHTML = `
                <strong>${data[0].name}</strong>
                <span>${data[0].url}</span>
                <span> Data criação: ${data[0].created_at}</span>
                `
                ul.appendChild(li);
                console.log(data)
        })

        }).catch(e => console.log(e.message));
    //   .then(data => {
    //         const li = document.createElement('li');
    //         const span = document.createElement('span');
    //         li.textContent = data.name;
    //         span.textContent = data.url
    //         span.textContent = Intl.DateTimeFormat('pt-BR').format(new Date(data.created_at));
    //         ul.appendChild(span)
    //         ul.appendChild(li);
    //     });
}
getApiGitHub();