import "@babel/polyfill";
import { progressLoader } from "./progressLoader";
require("../scss/main.scss");

window.onload = function() {
  const progBar = document.querySelector(".progress-bar");
  const hoverMessage = document.querySelector(".hover-message");

  progressLoader();

  const showMessage = function() {
    hoverMessage.classList.remove("hide");
  };
  const hideMessage = function() {
    hoverMessage.classList.add("hide");
  };

  // progBar.onmouseover = showMessage;
  // progBar.onmouseout = hideMessage;

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      progressLoader();
    } else {
      progressLoader();
    }
  }

  let x = window.matchMedia("(max-width: 450px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
};
