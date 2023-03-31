const {
  cSharpCertifications,
  cSharpCertificationsCredentials,
  pythonCertifications,
  pythonCertificationsCredentials,
  frontEndCertifications,
  frontEndCertificationsCredentials,
} = await import("./Certifications.js");

const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner = document.querySelector(".carousel-inner");
const swiperEl = document.querySelector(".mySwiper");
const swiperEl2 = document.querySelector(".mySwiper2");
const swiperEl3 = document.querySelector(".mySwiper3");
const swipers = [swiperEl, swiperEl2, swiperEl3];
const swiperSlide = document.querySelector(".swiperSlide");

function swiperElement(
  certification,
  certificationUrl,
  elements
) {
  elements.innerHTML += `
      <swiper-slide class="swiperSlide">
      <div class="swiperTextAndLink">
      <p>${certification}</p>
      <a class="actionLinkCertifications" href="${certificationUrl}">See Certification</a>
      </div>
      </swiper-slide>`;
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

function certificationsSwiper() {
  const Certification = [
    ...cSharpCertifications,
    ...pythonCertifications,
    ...frontEndCertifications,
  ];
  const certificationUrl = [
    ...cSharpCertificationsCredentials,
    ...pythonCertificationsCredentials,
    ...frontEndCertifications,
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

    const aluraCertificateUrl = "https://cursos.alura.com.br/certificate/";

    swiperElement(
      certification,
      `${aluraCertificateUrl + certificationUrl[index]}`,
      element
    );
  });
}


certificationsSwiper();
