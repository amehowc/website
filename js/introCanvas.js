export const introCanvas = () => {
  const canvasIntro = document.getElementById("canvas-intro");

  const sketchIntro = (p5) => {
    const colors = [
      ["#ED8008", "#ED3F1C", "#BF1B1B", "#736B1E", "#D9D2C6"],
      ["#AAB7BF", "#736356", "#BFB1A8", "#AD1D1D", "#261201"],
      ["#BF7C2A", "#C09C6F", "#5F503E", "#9C9C9C", "#E1E4E1"],
      ["#84764B", "#B7B183", "#372E2D", "#BCB3A6", "#DBD7D3"],
      ["#84754A", "#3A3124", "#96937D", "#B9ADA4", "#090000"],
      ["#AF2E1B", "#CC6324", "#3B4B59", "#BFA07A", "#D9C3B0"],
      ["#AE2F25", "#E15E3E", "#315B7B", "#292A2E", "#50474C"],
      ["#C5441F", "#F07032", "#40341F", "#8B8178", "#D9CAB8"],
      ["#0D703F", "#F1B73A", "#E6423A", "#5B4A3B", "#D3D8D2"],
    ];
    const pickedColors = colors[Math.floor(Math.random() * colors.length)];
    const frameForEach = 2 * 60;
    const totalFrames = pickedColors.length * frameForEach;
    p5.setup = () => {
      const size = window.innerWidth < 767 ? 240 : window.innerHeight*.3;
      const canvas = p5.createCanvas(size, Math.floor((size * 16) / 9), p5.WEBGL);
      canvas.parent(document.getElementById('intro-canvas'))
      // p5.textAlign(p5.CENTER, p5.CENTER);
      p5.noStroke()
    };

    p5.draw = () => {
      p5.clear()
      const progress = (p5.frameCount/totalFrames)%1 ;
      const actual = Math.floor(p5.frameCount % totalFrames / frameForEach);
      p5.lights()
      p5.push()
      p5.translate(0,0,-p5.width*.5)
      p5.rotateY(progress*p5.PI*pickedColors.length+p5.PI/2)
      p5.fill(pickedColors[actual])
      p5.plane(p5.width,p5.height)
      p5.pop()
    };

    p5.windowResized = () => {
      const size = window.innerWidth < 767 ? 240 : window.innerHeight*.3;
      p5.resizeCanvas(size, (size * 16) / 9);
    };
  };
   const introP5 = new p5(sketchIntro);
};
