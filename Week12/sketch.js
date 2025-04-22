let player;
let obstacles = [];
let exitZone;
let mouseDrawnObjects = []; 
let showWinMessage = false;

function setup() {
  createCanvas(600, 400);
  player = createPlayer();
  createObstacles(5);
  exitZone = createExitZone();
}

function draw() {
  background(220);

  drawMouseObjects(); 

  drawBorders();
  movePlayer();
  drawPlayer();

  updateObstacles();
  drawObstacles();

  drawExitZone();

  if (checkWin()) {
    displayWinMessage();
  }
}

function createPlayer() {
  return {
    x: 50,
    y: height / 2,
    size: 20,
    speed: 3
  };
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;
}

function drawPlayer() {
  fill(0, 100, 255);
  ellipse(player.x, player.y, player.size);
}

function mousePressed() {
  mouseDrawnObjects.push({
    x: mouseX,
    y: mouseY,
    size: 30,
    color: color(random(255), random(255), random(255))
  });
}

function drawMouseObjects() {
  for (let obj of mouseDrawnObjects) {
    fill(obj.color);
    ellipse(obj.x, obj.y, obj.size);
  }
}

function createObstacles(num) {
  for (let i = 0; i < num; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      w: random(20, 60),
      h: random(20, 60),
      color: color(random(255), random(255), random(255)),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }
}

function updateObstacles() {
  for (let obs of obstacles) {
    obs.x += obs.dx;
    obs.y += obs.dy;

    if (obs.x > width) obs.x = 0;
    if (obs.x < 0) obs.x = width;
    if (obs.y > height) obs.y = 0;
    if (obs.y < 0) obs.y = height;
  }
}

function drawObstacles() {
  for (let obs of obstacles) {
    fill(obs.color);
    rect(obs.x, obs.y, obs.w, obs.h);
  }
}

function drawBorders() {
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(0, 0, width, height);
}

function createExitZone() {
  return {
    x: width - 50,
    y: height / 2 - 25,
    w: 40,
    h: 50
  };
}

function drawExitZone() {
  fill(0, 255, 0);
  rect(exitZone.x, exitZone.y, exitZone.w, exitZone.h);
}

function checkWin() {
  return (
    player.x > exitZone.x &&
    player.x < exitZone.x + exitZone.w &&
    player.y > exitZone.y &&
    player.y < exitZone.y + exitZone.h
  );
}

function displayWinMessage() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You Win!", width / 2, height / 2);
}