"use strict";
import("./Swiper/Swiper.js");
import("./FetchApiGitHub.js");
const req = import("./resource/indexEn.js");
renderHTML(req);

function renderHTML(req)
{
  req.then((data) => {
    render(data.localizer);
  });
}

const aboutMeTitle = document.querySelector("#aboutMe");
const aboutMeEl = document.querySelector(".about_Me_Description");
const experienceTitle = document.querySelector("#experience");
const experienceEl = document.querySelector(".experience_Description");

let btnClicked = false;
function getFileTranslation() {
  const buttonTranlation = document.querySelector("#buttonTranlation");

  buttonTranlation.addEventListener("click", (e) => {

    btnClicked = !btnClicked;

    const req = btnClicked
      ? import("./resource/indexPt.js")
      : import("./resource/indexEn.js");


      renderHTML(req);
  });
}

function render(localizer) {
  aboutMeTitle.innerHTML = localizer.aboutMeTitle;
  aboutMeEl.innerHTML = localizer.aboutMeText;
  experienceTitle.innerHTML = localizer.experienceTitle;
  experienceEl.innerHTML = localizer.experienceText;
}


getFileTranslation();