document.addEventListener("DOMContentLoaded", function () {
  const workItems = document.getElementsByClassName("work-item");
  for (let i = 0; i < workItems.length; i++) {
    workItems[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  const canvas = document.getElementById("spinner-canvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  let radiusIncrease = 0;
  const radius = Math.min(height * 0.3, width * 0.5);
  const text = canvas.innerHTML;
  const textSize = ((radius * Math.PI * 2) / (text.length + 4)) * 1;
  const numframes = 3 * 60;
  let time = 0;
  ctx.font = ` Inter ${textSize}px sans-serif`;
  const draw = () => {
    const progress = ((time / numframes) % numframes) * Math.PI;
    const updatedRadius = radius + radiusIncrease * height * 0.05;
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.save();
    ctx.fillStyle ='transparent';
    ctx.beginPath();
    ctx.arc(0, 0, updatedRadius, updatedRadius, 2 * Math.PI, true);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "antiquewhite";
    let arcLength = 0;
    const letters = text.split("").forEach((char, i, arr) => {
      const { width } = ctx.measureText(char);
      const lettersRadius = updatedRadius - textSize;
      const angle = Math.PI + arcLength / lettersRadius + progress;
      const x = Math.cos(angle) * lettersRadius;
      const y = Math.sin(angle) * lettersRadius;
      const xx = Math.cos(angle + Math.PI) * lettersRadius;
      const yy = Math.sin(angle + Math.PI) * lettersRadius;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle + Math.PI / 2);
      ctx.fillText(char, 0, 0);
      ctx.restore();
      ctx.save();
      ctx.translate(xx, yy);
      ctx.rotate(angle + Math.PI * 1.5);
      ctx.fillText(char, 0, 0);
      ctx.restore();
      arcLength += width;
    });
    ctx.restore();
  };
  const update = () => {
    time++;
    draw();
    window.requestAnimationFrame(update);
  };
  update();

  function updateRadius() {
    const percent = Math.pow(variable, 2);
    radiusIncrease = percent;
  }

  canvas.addEventListener("mouseover", () => {
    smoothTransition(0, 1, 500, (value) => {
      variable = value;
      updateRadius();
    });
  });

  canvas.addEventListener("mouseout", () => {
    smoothTransition(1, 0, 500, (value) => {
      variable = value;
      updateRadius();
    });
  });

  function smoothTransition(start, end, duration, callback) {
    const startTime = new Date().getTime();

    function update() {
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;

      if (elapsed >= duration) {
        callback(end);
      } else {
        const progress = elapsed / duration;
        const easedProgress = quadraticEaseInOut(progress);
        const value = start + (end - start) * easedProgress;
        callback(value);
        requestAnimationFrame(update);
      }
    }

    update();
  }

  function quadraticEaseInOut(t) {
    if (t < 0.5) {
      return 2 * t * t;
    } else {
      return -1 + (4 - 2 * t) * t;
    }
  }
});
