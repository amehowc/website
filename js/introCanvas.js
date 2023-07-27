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
      const size = window.innerWidth < 767*p5.pixelDensity() ? 360 : 480;
      p5.createCanvas(size, Math.floor((size * 16) / 9), p5.P2D, canvasIntro);
      // p5.pixelDensity()/
      console.log(window.innerWidth)
      p5.textAlign(p5.CENTER,p5.CENTER)
    };

    p5.draw = () => {
      const progress = p5.frameCount % totalFrames;
      const actual = Math.floor(progress / frameForEach);
      p5.background(pickedColors[actual]);
      p5.push()
      p5.translate(p5.width/2,p5.height/2)
      p5.textSize(120)
      p5.text(window.innerWidth,0,0)
      p5.pop()

      
    };

    p5.windowResized = () => {
      const size = window.innerWidth < 767 ? 360 : 480;
      p5.resizeCanvas(size, (size * 16) / 9);
    };
  };
  const introP5 = new p5(sketchIntro);
};

