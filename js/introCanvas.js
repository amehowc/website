

export const introCanvas = () => {
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
  
  const canvasIntro = document.getElementById('canvas-intro');
  const ctxIntro = canvasIntro.getContext("2d");
  const pickedColors = colors[Math.floor(Math.random()*colors.length)];
  console.log(window.innerWidth)
  const canvasWidth = window.innerWidth > 767 ? window.innerWidth * 0.2 : 360;
  console.log(canvasWidth)
  const canvasHeight = canvasWidth * 16 / 9;
  canvasIntro.width = canvasWidth;
  canvasIntro.height = canvasHeight;
  const frameForEach = 3 * 60
  const totalFrames = pickedColors.length * frameForEach;
  let progress = 0;
  let actual = 0;
  function draw() {
    progress = (progress + 1) % totalFrames;
    actual = Math.floor(progress / frameForEach);
    
    ctxIntro.clearRect(0, 0, canvasIntro.width, canvasIntro.height);
    ctxIntro.fillStyle = pickedColors[actual];
    ctxIntro.fillRect(0, 0, canvasIntro.width, canvasIntro.height);
    
    requestAnimationFrame(draw);
  }
  draw()

  function windowResized() {
    console.log('hey')
    const canvasWidth =  window.innerWidth > 767 ? window.innerWidth * 0.33 : 360;
    const canvasHeight = canvasWidth * 16 / 9;
    const canvasIntro = document.getElementById('canvas-intro');
    canvasIntro.width = canvasWidth;
    canvasIntro.height = canvasHeight;
    console.log(canvasIntro.width)
  }
  
  window.addEventListener("resize", windowResized);


}