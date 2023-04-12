"use strict";
import("./Swiper/Swiper.js");
import("./FetchApiGitHub.js");
renderHTML(import("./resource/indexEn.js"));

const welcomeContent = document.querySelector(".welcomeToPortifolio");
const aboutMeTitle = document.querySelector("#aboutMe");
const aboutMeEl = document.querySelector(".about_Me_Description");
const experienceTitle = document.querySelector("#experience");
const experienceEl = document.querySelector(".experience_Description");
const projectsTitle = document.querySelector("#projects");
const certificationsTitle = document.querySelector("#certifications");
let carouselFistSlide = certificationsTitle;
let btnClicked = false;
function getFileTranslation() {
  const buttonTranlation = document.querySelector("#buttonTranlation");

  buttonTranlation.addEventListener("click", (e) => {
    btnClicked = !btnClicked;
    carouselFistSlide = document.querySelector(".carouselFistSlide");


    const req = btnClicked
    ? import("./resource/indexPt.js")
    : import("./resource/indexEn.js");

    renderHTML(req);
  });
}

function renderHTML(req)
{
  req.then((data) => {
    render(data.localizer);
  });
}

function render(localizer) {
  welcomeContent.innerHTML = localizer.welcomeContent;
  aboutMeTitle.innerHTML = localizer.aboutMeTitle;
  aboutMeEl.innerHTML = localizer.aboutMeText;
  experienceTitle.innerHTML = localizer.experienceTitle;
  experienceEl.innerHTML = localizer.experienceText;
  projectsTitle.innerHTML = localizer.projectsTitle;
  carouselFistSlide.innerHTML = localizer.carouselFistSlide;
  certificationsTitle.innerHTML = localizer.certificationsTitle;
}

getFileTranslation();