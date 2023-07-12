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

function setup() {
  const canvas = document.getElementById("canvas");
  console.log(canvas)
  pickedColors = random(colors);
  const canvasWidth = windowWidth < 767 ? windowWidth * .66 : 360
  const canvasHeight = canvasWidth * 16 / 9
  createCanvas(canvasWidth , canvasHeight, P2D, canvas);
}

function draw() {
  const totalCount = pickedColors.length;
  const frameForEach = 120;
  const totalFrames = totalCount * frameForEach;
  const progress = (frameCount % totalFrames) / totalFrames;
  const actual = floor((frameCount % totalFrames) / frameForEach);
  clear()
  background(pickedColors[actual]);
}

function windowResized() {
    const canvasWidth = windowWidth < 767 ? windowWidth * .66 : windowWidth * .33
    const canvasHeight = canvasWidth * 16 / 9
    resizeCanvas(canvasWidth, canvasHeight );
  }
