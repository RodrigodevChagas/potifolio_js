const {
  cSharpCertificationsCredentials,
  pythonCertificationsCredentials,
  frontEndCertificationsCredentials,
} = await import("./CertificationsCredentials.js");

const swiperEl = document.querySelector(".mySwiper");
const swiperEl2 = document.querySelector(".mySwiper2");
const swiperEl3 = document.querySelector(".mySwiper3");
const swipers = [swiperEl, swiperEl2, swiperEl3];

const buttonTranslation = document.querySelector("#buttonTranlation");
let btnClicked = false;

buttonTranslation.addEventListener("click", (e) => {
  btnClicked = !btnClicked;
  swiperEl.innerHTML = ''
  swiperEl2.innerHTML = ''
  swiperEl3.innerHTML = ''
  alternateLanguage();
});

async function alternateLanguage(){
  const {
    cSharpCertifications,
    pythonCertifications,
    frontEndCertifications,
  } = btnClicked
  ? await import("./CertificationsPt.js")
  : await import("./CertificationEn.js");

  function swiperElement(
    certification,
    certificationUrl,
    elements
  ) {
    certificationUrl += !btnClicked ? `?lang=en` : `?lang=pt_BR`;

    elements.innerHTML += `
        <swiper-slide class="swiperSlide">
        <div class="swiperTextAndLink">
          <p>${certification}</p>
          <a class="actionLinkCertifications" href="${certificationUrl}" target="_blank" >See Certification</a>
        </div>
        </swiper-slide>`;
  }

  function certificationsSwiper() {
    const Certification = [
      ...cSharpCertifications,
      ...pythonCertifications,
      ...frontEndCertifications,
    ];
    const certificationUrl = [
      ...cSharpCertificationsCredentials,
      ...pythonCertificationsCredentials,
      ...frontEndCertificationsCredentials,
    ];

    const elements = [swiperEl, swiperEl2, swiperEl3];

    return Certification.map((certification, index) => {
      let element;

      if (index < 13) {
        element = elements[0];
      } else if (index > 12 && index < 23) {
        element = elements[1];
      } else {
        element = elements[2];
      }
      const aluraCertificateUrl = !certificationUrl[index].includes("degree")
      ? "https://cursos.alura.com.br/certificate/"
      : "https://cursos.alura.com.br" ;

      swiperElement(
        certification.toUpperCase(),
        `${aluraCertificateUrl + certificationUrl[index]}`,
        element
        );
      });
    }
    function assignToObject() {
      swipers.map((swiper) => {
        Object.assign(swiper, {
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

    certificationsSwiper();
    assignToObject();
    swiperEl.initialize()
    swiperEl2.initialize()
    swiperEl3.initialize()
}
alternateLanguage();