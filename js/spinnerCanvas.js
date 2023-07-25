export const spinnerCanvas = () => {
  const canvasSpinner = document.getElementById("spinner-canvas");
  const ctxSpinner = canvasSpinner.getContext("2d");
  const width = canvasSpinner.width;
  const height = canvasSpinner.height;
  let radiusIncrease = 0;
  const radius = Math.min(height * 0.3, width * 0.5);
  const text = canvasSpinner.innerHTML;
  const textSize = ((radius * Math.PI * 2) / (text.length + 4)) * 1;
  const numframes = 3 * 60;
  let time = 0;
  ctxSpinner.font = ` Inter ${textSize}px sans-serif`;
  const drawSpinner = () => {
    const progress = ((time / numframes) % numframes) * Math.PI;
    const updatedRadius = radius + radiusIncrease * height * 0.05;
    ctxSpinner.clearRect(0, 0, width, height);
    ctxSpinner.save();
    ctxSpinner.translate(width / 2, height / 2);
    ctxSpinner.save();
    ctxSpinner.fillStyle = "transparent";
    ctxSpinner.beginPath();
    ctxSpinner.arc(0, 0, updatedRadius, updatedRadius, 2 * Math.PI, true);
    ctxSpinner.fill();
    ctxSpinner.restore();
    ctxSpinner.fillStyle = "antiquewhite";
    let arcLength = 0;
    const letters = text.split("").forEach((char, i, arr) => {
      const { width } = ctxSpinner.measureText(char);
      const lettersRadius = updatedRadius - textSize;
      const angle = Math.PI + arcLength / lettersRadius + progress;
      const x = Math.cos(angle) * lettersRadius;
      const y = Math.sin(angle) * lettersRadius;
      const xx = Math.cos(angle + Math.PI) * lettersRadius;
      const yy = Math.sin(angle + Math.PI) * lettersRadius;
      ctxSpinner.save();
      ctxSpinner.translate(x, y);
      ctxSpinner.rotate(angle + Math.PI / 2);
      ctxSpinner.fillText(char, 0, 0);
      ctxSpinner.restore();
      ctxSpinner.save();
      ctxSpinner.translate(xx, yy);
      ctxSpinner.rotate(angle + Math.PI * 1.5);
      ctxSpinner.fillText(char, 0, 0);
      ctxSpinner.restore();
      arcLength += width;
    });
    ctxSpinner.restore();
  };
  const update = () => {
    time = (time + 1)%numframes;
    drawSpinner();
    window.requestAnimationFrame(update);
  };
  update();

  function updateRadius() {
    const percent = Math.pow(variable, 2);
    radiusIncrease = percent;
  }

  canvasSpinner.addEventListener("mouseover", () => {
    smoothTransition(0, 1, 500, (value) => {
      variable = value;
      updateRadius();
    });
  });

  canvasSpinner.addEventListener("mouseout", () => {
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
};
