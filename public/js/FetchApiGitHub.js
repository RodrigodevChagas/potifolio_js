const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner = document.querySelector(".carousel-inner");

function datePatronization(_dateString) {
  let date = new Date(_dateString);
  let day = date.getUTCDate().toString().padStart(2, "0");
  let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  let year = date.getUTCFullYear().toString();
  //dateString = date;

  return `${month}/${day}/${year}`;
}

export default function getApiGitHub() {
  const url = "https://api.github.com/users/RodrigodevChagas/repos";
  fetch(url)
    .then(async (response) => {
      if (!response.ok) throw new Error(response.statusText);

      var data = await response.json();

      data.map((item, index) => {
        const dateString = item.created_at;
        const date = datePatronization(dateString);
        const buttonElement =
          index < 1
            ? `<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" class="active"
                  aria-label="Slide ${index + 1}"></button>`
            : `
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" aria-label="Slide ${
                index + 1
              }"></button>
                  `;

        if (index < 1) {
          carouselIndicators.innerHTML = buttonElement;

          carouselInner.innerHTML += `
                      <div class="carousel-item active" data-bs-interval="10000">
                        <div class="card w-100 img-fluid" >
                          <div class="card-body">
                            <h5 class="card-title carouselFistSlide">Here are my projects available on GitHub</h5>
                          </div>
                        </div>
                      </div>`;
        } else {
          carouselIndicators.innerHTML += buttonElement;
          carouselInner.innerHTML += `
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
        }
      });
    })
    .catch((e) => console.log(e.message));
}

getApiGitHub()
