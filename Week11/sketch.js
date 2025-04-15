let player;
let obstacles = [];
let lasers = [];
let exitPortal;
let win = false;
let pulse = 0;

function setup() {
  createCanvas(600, 400);
  player = { x: 50, y: 50, size: 20, speed: 3 };

  for (let i = 0; i < 3; i++) {
    obstacles.push(createObstacle());
  }

  exitPortal = { x: width - 80, y: height - 80, r: 30 };
}

function draw() {
  background(10);

  stroke(40);
  for (let i = 0; i < width; i += 40) {
    line(i, 0, i, height);
  }
  for (let j = 0; j < height; j += 40) {
    line(0, j, width, j);
  }

  noFill();
  stroke(0, 255, 200);
  strokeWeight(2);
  ellipse(exitPortal.x, exitPortal.y, exitPortal.r + sin(frameCount * 0.1) * 10);

  pulse = sin(frameCount * 0.2) * 5;
  noStroke();
  fill(255, 100, 255);
  ellipse(player.x, player.y, player.size + pulse);
  handlePlayerMovement();

  for (let obs of obstacles) {
    moveObstacle(obs);
    displayObstacle(obs);
  }

  for (let laser of lasers) {
    stroke(255, 0, 0);
    strokeWeight(4);
    line(laser.x1, laser.y1, laser.x2, laser.y2);
  }

  if (
    dist(player.x, player.y, exitPortal.x, exitPortal.y) < exitPortal.r
  ) {
    win = true;
  }

  if (win) {
    fill(0, 255, 100);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("YOU WIN!", width / 2, height / 2);
    noLoop();
  }
}

function handlePlayerMovement() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  else if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  else if (keyIsDown(DOWN_ARROW)) player.y += player.speed;
}

function createObstacle() {
  return {
    x: random(width),
    y: random(height),
    size: random(25, 40),
    vx: random(-2, 2),
    vy: random(-2, 2),
    color: color(random(255), random(255), random(255))
  };
}

function moveObstacle(obs) {
  obs.x += obs.vx;
  obs.y += obs.vy;

  if (obs.x > width) obs.x = 0;
  if (obs.x < 0) obs.x = width;
  if (obs.y > height) obs.y = 0;
  if (obs.y < 0) obs.y = height;
}

function displayObstacle(obs) {
  fill(obs.color);
  stroke(255);
  rect(obs.x, obs.y, obs.size, obs.size);
}

function mousePressed() {
  lasers.push({
    x1: mouseX,
    y1: mouseY,
    x2: mouseX + random(-50, 50),
    y2: mouseY + random(-50, 50)
  });
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    win = false;
    player.x = 50;
    player.y = 50;
    loop();
  } else if (key === ' ') {

  } else {
    console.log("You pressed:", key);
  }
}