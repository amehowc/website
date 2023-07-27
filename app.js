import { spinnerCanvas } from "./js/spinnerCanvas.js";
import { introCanvas } from "./js/introCanvas.js";

document.addEventListener("DOMContentLoaded", function () {
  const workItems = document.getElementsByClassName("work-item");
  for (let i = 0; i < workItems.length; i++) {
    const workItem = workItems[i];

    workItem.addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
    workItem.addEventListener("mouseover", () => {
      const lineOne = workItem.querySelector(".work-item-line-one");
      
      const firstWord = workItem.querySelector(".work-item-client");
      const secondWord = workItem.querySelector(".work-item-info");
      
      const subContainer = workItem.querySelector(".work-item-container");
      const containerRect = workItem.getBoundingClientRect();
      const subContainerRect = subContainer.getBoundingClientRect();
      const firstWordRect = firstWord.getBoundingClientRect();
      const secondWordRect = secondWord.getBoundingClientRect();
     
      const margins = 10;
      const lineOneStart = firstWordRect.right - subContainerRect.left + margins;
      const lineOneEnd = secondWordRect.left - containerRect.left - margins;
      lineOne.style.left = lineOneStart + "px";
      lineOne.style.width = lineOneEnd - lineOneStart + "px";
      lineOne.style.display = "block";
    
    });
   
    workItem.addEventListener("mouseout", (event) => {
      const lineOne = workItem.querySelector(".work-item-line-one")
      lineOne.style.display = "none"
      const lineTwo = workItem.querySelector(".work-item-line-two")
      lineTwo.style.display = "none"
    
    });
  }

  spinnerCanvas();
  introCanvas();
});
