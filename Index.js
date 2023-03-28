const carouselIndicators = document.querySelector('.carousel-indicators');
const carouselInner = document.querySelector('.carousel-inner');
const swiperEl = document.querySelector(".mySwiper");
const swiperEl2 = document.querySelector(".mySwiper2");
const swiperEl3 = document.querySelector(".mySwiper3");
const swipers = [swiperEl, swiperEl2, swiperEl3];
const swiperSlide = document.querySelector(".swiperSlide");

const cSharpCertifications = ['.NET 5 e EF Core: Relacionando Entidades', 'API Rest com .NET 5: Operações essenciais com verbos HTTP', 'C# parte 1: Primeiros passos', 'C# parte 2: Entendendo a Orientação a Objetos',
'C# parte 3: entendendo herança e interface', 'C# parte 4: Entendendo exceções', 'C# parte 5: Bibliotecas DLLs, documentação e usando o NuGet', 'C# parte 6: Strings, expressões regulares e a classe Object',
'C# parte 7: Array e tipos genéricos', 'C# parte 8: List, lambda, linq', 'C# Parte 9: entrada e saída (I/O) com streams', 'C# e orientação a objetos', 'HTTP: Entendendo a web por baixo dos panos']
const cSharpCertificationsCredentials = ['e2aaa9c3-5c82-4829-84b5-c2db82fef38f', '3b562fc6-d049-4d4b-aec7-272f338a17fe', '7949fe59-5f0f-411a-849e-577f112e8578', '660b9e5f-332f-4166-b16e-982e7d0493e1',
'330cea66-219b-499d-9960-4895bf4e1ab3', '2b1bbf30-0c3e-42dd-87e6-9f283ba3ee79', '77955027-4523-4901-9ca9-5630c6df4d81', '9564c431-efdd-47ee-931f-efd1ba26e087', '184a5756-6990-4b82-bafd-dd5edb781194',
'7b3c7bd3-ef3e-4992-845f-8effeed19dcd', 'e2efc085-9090-44cf-bfac-7afa57089153', 'bd1bbfb4-d7fd-4ad6-8492-d5c9bee80b88', '55e7695d-3391-4c05-a0f5-8a6b99f4143e']

const pythonCertifications = ['Aprenda a programar em Python com Orientação a Objetos', 'Python Brasil: validação de dados no padrão nacional', 'Testes automatizados: TDD com Python',
'Python Collections parte 1: listas e tuplas', 'Python Collections parte 2: conjuntos e dicionários', 'Python: avançando na linguagem', 'Python: Avançando na orientação a objetos', 'Python: começando com a linguagem',
'Python: entendendo a Orientação a Objetos', 'String em Python: extraindo informações de uma URL']
const pythonCertificationsCredentials = ['f743efa3-031b-46d8-8ff2-88bc0597dfb5', '86a59d85-25c1-4e6e-b003-7847a0f02c1d', '85d00f10-fff7-4c58-b5f4-bf67cb60e88a',
'accb4319-e3db-45f2-aa21-7e853e3639e1', 'c0468f78-c17e-4661-9e6a-1046ee3706c5', '71db1d52-f976-44b7-ac26-70f04611e324', '8ad736cb-23d6-4a42-a76d-936e9b8931f4',
'ec8234dc-67f0-4ad0-8f36-56c4a0144ad6', '3522b6dc-aec3-4c6d-9827-6fa6dbe0da15', '610f4ab9-a23e-4dd6-b2ab-a3c522c681ec']

const frontEndCertifications = ['Bootstrap 4: criando uma landing page responsiva', 'JavaScript: Conhecendo o Browser e padrões de projeto', 'HTML5 e CSS3 parte 3: Trabalhando com formulários e tabelas',
'HTML5 e CSS3 parte 1: crie uma página da Web', 'HTML5 e CSS3 parte 2: Posicionamento, listas e navegação', 'HTML5 e CSS3 parte 4: Avançando no CSS']
const frontEndCertificationsCredentials = ['e25f7532-d331-42b3-8876-7cdf6b8c9c03', 'c08d9993-8e95-4182-8328-1ff8001ff81c', 'f9d5b2c-cd79-49fb-b60d-55e96a81fd3d', '893cc341-ff19-48fc-aec1-49f459311570',
'03f35994-8c34-495e-9789-a9b8184d1d95', '7809629f-0d86-4e51-9bc2-312d2782e55a']

const aluraCertificateUrl = 'https://cursos.alura.com.br/certificate/';


function getApiGitHub()
{
    const url = 'https://api.github.com/users/RodrigodevChagas/repos';
    fetch(url)
    .then( async response =>
        {
            if (!response.ok)
                throw new Error(response.statusText);

            var data =  await response.json();
            
            
            data.map((item, index) =>{
                const dateString = item.created_at;
                const date = datePatronization(dateString);
                const buttonElement = index < 1 ?  `<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" class="active"
                aria-label="Slide ${index+1}"></button>`:`
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" aria-label="Slide ${index + 1 }"></button>
                `;
              
                if(index < 1){
                carouselIndicators.innerHTML = buttonElement;
    
                carouselInner.innerHTML += `
                    <div class="carousel-item active" data-bs-interval="10000">
                    
                    <div class="card w-100 img-fluid" >
                    <div class="card-body">
                    <h5 class="card-title">Here are my projects available on GitHub</h5>
                                </div>
                                </div>
                                </div>`;
                }
                else{
                    carouselIndicators.innerHTML += buttonElement;
                    carouselInner.innerHTML +=`
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="card w-100">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <h6 class="card-subtitle mb-2 ">Language: ${item.language}</h6>
                                <h6 class="card-subtitle mb-2 ">Creation Date: ${date}</h6>
                                <a href="${item.html_url}" class="card-link">Github Repository</a>
                                <a href="#" class="card-link">Linkedin video project link</a>
                            </div>
                        </div>
                    </div>
                    `;
            }});
        })
    .catch(e => console.log(e.message));
}

function datePatronization(_dateString){
    let date = new Date(_dateString);
    let day = date.getUTCDate().toString().padStart(2, "0");
    let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    let year = date.getUTCFullYear().toString();
    dateString = date

    return `${month}/${day}/${year}`;
}
function swiperElement(certification, certificationUrl, elements){
    elements.innerHTML += `
    <swiper-slide class="swiperSlide">
    <div class="swiperTextAndLink">
    <p>${certification}</p>
    <a class="actionLinkCertifications" href="${certificationUrl}">See Certification</a>
    </div>
    </swiper-slide>`;
}
function certificationsSwiper(){
    const Certification =[...cSharpCertifications, ...pythonCertifications, ...frontEndCertifications ];
    const certificationUrl = [...cSharpCertificationsCredentials, ...pythonCertificationsCredentials, ...frontEndCertifications];
    const elements = [swiperEl, swiperEl2, swiperEl3];
    return Certification.map((certification, index) => {
        let element;

        if(index < 13){
            element = elements[0]
        }
        else if(index > 12 && index <23){
            element = elements[1]
        }
        else{ element = elements[2]}

        swiperElement(certification, `${aluraCertificateUrl + certificationUrl[index]}`, element)
    });
}

function assignToObject(){
    swipers.map(swiper =>
    {
        Object.assign(swiper,
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
    });
}

getApiGitHub();
certificationsSwiper();
assignToObject();
swiperEl.initialize();
swiperEl2.initialize();
swiperEl3.initialize();