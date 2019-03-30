export const progressLoader = function() {
  const progBar = document.querySelector(".progress-bar");
  const desiredDonations = 668;
  let currentDonations = 501; // if i can get the current donations amount from somewhere, i can update the loader

  let w = parseFloat(getComputedStyle(progBar).width);
  let percent = (currentDonations / desiredDonations) * 100;
  //looking at the picture, i'm assuming 3*167=501 was donated, it looks like the bar holds 4 equal 167 parts
  //based on this assumption i'm guessing desired amount is 668, so i'm getting the current percentage of donations
  let offset = (percent / 100) * w; //getting the bar width corresponding to this percentage
  const progress = document.querySelector(".progress");
  progress.style.width = offset + "px";

  let messageAmount = document.querySelector(".tip-content");
  messageAmount.textContent = desiredDonations - currentDonations;
};
