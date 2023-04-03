"use strict";
import("./Swiper/Swiper.js");
import("./FetchApiGitHub.js");

function getFileTranslation() {
    const buttonTranlation = document.querySelector("#buttonTranlation");
    let loclaizer = [];

  buttonTranlation.addEventListener("click", (e) => {
    const translateCurrent = e.target.value;
    const req = false
      ? import("./ressource/indexEn.js")
      : import("./ressource/indexPt.js");


    // console.log("asdasd")
    req.then((data) => {
      render(data.localizer);
    });
  });
}

function render(localizer) {
    console.log(localizer)
}

getFileTranslation();
