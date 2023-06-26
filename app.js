document.addEventListener("DOMContentLoaded", function() {
    const workItems = document.getElementsByClassName("work-item");
    for (let i = 0; i < workItems.length; i++) {
      workItems[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  });