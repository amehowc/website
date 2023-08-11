export const spinnerCanvas = () => {
  const canvasSpinner = document.getElementById("spinner-canvas");

  const sketchSpinner = (p5) => {
    const radius = Math.min(
      canvasSpinner.height * 0.45,
      canvasSpinner.width * 0.45
    );
    const text = canvasSpinner.innerHTML;
    const textSize = ((radius * Math.PI * 2) / (text.length + 4)) * 1;
    const numframes = 6 * 60;
    let radiusIncrease = 0;
    p5.setup = () => {
      p5.createCanvas(
        radius*2.5,
        radius*2.5,
        p5.P2D,
        canvasSpinner
      );
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.textFont("Inter");
      p5.textSize(textSize);
    };
    p5.draw = () => {
      const progress = (p5.frameCount % numframes) / numframes;
      p5.clear();
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);
      let arcLength = 0;
      p5.fill('antiqueWhite')
      text.split("").forEach((char, i) => {
        const width = p5.textWidth(char);
        arcLength += width / 2;
        const off = Math.PI;
        const angle = off + arcLength / radius + progress * p5.TWO_PI;
        p5.push();
        p5.translate(radius * Math.cos(angle), radius * Math.sin(angle));
        p5.rotate(angle + Math.PI / 2);
        p5.text(char, 0, 0);
        p5.pop();
        p5.push();
        p5.translate(radius * Math.cos(angle+Math.PI), radius * Math.sin(angle+Math.PI));
        p5.rotate(angle - Math.PI / 2);
        p5.text(char, 0, 0);
        p5.pop();
        arcLength += width / 2;
      });
      p5.pop();
    };
  };
  const introP5 = new p5(sketchSpinner);
};
