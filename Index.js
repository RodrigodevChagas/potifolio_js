const carouselIndicators = document.querySelector('.carousel-indicators');
const carouselInner = document.querySelector('.carousel-inner');
var swiperEl = document.querySelector(".mySwiper");

function getApiGitHub() {
    const url = 'https://api.github.com/users/RodrigodevChagas/repos';
    fetch(url)
    .then( async response =>
        {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            var data =  await response.json();
            carouselInner.innerHTML = `
            <div class="carousel-item active" data-bs-interval="10000">
                <div class="card w-100">
                    <div class="card-body">
                        <h5 class="card-title">${data[0].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${data[0].url}Programming Language</h6>
                        <a href="#" class="card-link">${data[0].url}</a>
                        <a href="#" class="card-link">Linkedin video project link</a>
                    </div>
                </div>
            </div>`;
            data.map(item =>{
                carouselIndicators.innerHTML +=`
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${data.indexOf(item)}" class="active"
                aria-current="true" aria-label="Slide ${data.indexOf(item)}"></button>
                `;
                carouselInner.innerHTML +=`
                <div class="carousel-item" data-bs-interval="3000">
                    <div class="card w-100">
                        <div class="card-body">
                            <h5 class="card-title">${data[data.indexOf(item) + 2].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Programming Language</h6>
                            <a href="#" class="card-link">Github Repository link</a>
                            <a href="#" class="card-link">Linkedin video project link</a>
                        </div>
                    </div>
                </div>
                `
                // li.innerHTML = `
                // <strong>${item.name}</strong>
                // <span>${item.url}</span>
                // <span> Data criação: ${item.created_at}</span>
                // `
                // ul.appendChild(li);
                console.log(data)
        })

        }).catch(e => console.log(e.message));
}

Object.assign(swiperEl, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
    prev: {
        shadow: true,
        translate: [0, 0, -400],
    },
    next: {
        translate: ["100%", 0, 0],
    },
    },
});


swiperEl.initialize()
getApiGitHub();