const carouselIndicators = document.querySelector('.carousel-indicators');
const carouselInner = document.querySelector('.carousel-inner');
const swiperEl = document.querySelector(".mySwiper");
const swiperEl2 = document.querySelector(".mySwiper2");
const swiperEl3 = document.querySelector(".mySwiper3");
const swipers = [swiperEl, swiperEl2, swiperEl3];
const swiperSlide = document.querySelector(".swiperSlide");
const certifications = ['.NET 5 e EF Core: Relacionando Entidades', 'API Rest com .NET 5: Operações essenciais com verbos HTTP', 'Bootstrap 4: criando uma landing page responsiva',
'HTTP: Entendendo a web por baixo dos panos', 'JavaScript: Conhecendo o Browser e padrões de projeto', 'C# Parte 9: entrada e saída (I/O) com streams', 'C# e orientação a objetos',
'HTML5 e CSS3 parte 3: Trabalhando com formulários e tabelas', 'HTML5 e CSS3 parte 4: Avançando no CSS', 'C# parte 8: List, lambda, linq', 'C# parte 1: Primeiros passos',
'C# parte 2: Entendendo a Orientação a Objetos', 'C# parte 3: entendendo herança e interface', 'C# parte 4: Entendendo exceções', 'C# parte 5: Bibliotecas DLLs, documentação e usando o NuGet',
'C# parte 6: Strings, expressões regulares e a classe Object', 'C# parte 7: Array e tipos genéricos', 'Aprenda a programar em Python com Orientação a Objetos', 'HTML5 e CSS3 parte 1: crie uma página da Web',
'HTML5 e CSS3 parte 2: Posicionamento, listas e navegação', 'Python Brasil: validação de dados no padrão nacional', 'Testes automatizados: TDD com Python', 'Python Collections parte 1: listas e tuplas',
'Python Collections parte 2: conjuntos e dicionários', 'Python: avançando na linguagem', 'Python: Avançando na orientação a objetos', 'Python: começando com a linguagem', 'Python: entendendo a Orientação a Objetos',
'String em Python: extraindo informações de uma URL']

function getApiGitHub()
{
    const url = 'https://api.github.com/users/RodrigodevChagas/repos';
    fetch(url)
    .then( async response =>
        {
            if (!response.ok)
                throw new Error(response.statusText);
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
            })
        })
    .catch(e => console.log(e.message));
}

function certificationsSwiper(certifications) {
    for(var certification = 0; certification <certifications.length; certification++)
        {
            swiperEl.innerHTML += `<swiper-slide>${certifications[certification]}</swiper-slide>`
            swiperEl2.innerHTML += `<swiper-slide>${certifications[certification]}</swiper-slide>`
            swiperEl3.innerHTML += `<swiper-slide>${certifications[certification]}</swiper-slide>`
        }
    }
function assignToObject(){
    for(var swiper = 0; swiper < swipers; swiper++)
    {
        Object.assign(swipers[swiper],
            {
                grabCursor: true,
                effect: "creative",
                creativeEffect: {
                    prev: {
                        shadow: true,
                        translate: ["-125%", 0, -800],
                        rotate: [0, 0, -90],
                    },
                    next: {
                        shadow: true,
                        translate: ["125%", 0, -800],
                        rotate: [0, 0, 90],
                    },
                },
        });
    }
}
getApiGitHub();
certificationsSwiper(certifications);
assignToObject();
swiperEl.initialize();
swiperEl2.initialize();
swiperEl3.initialize();