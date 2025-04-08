let eyeLX, eyeRX, eyeLY, eyeRY;
let eyeLSpeedX, eyeRSpeedX, eyeLSpeedY, eyeRSpeedY;
let dotX, dotY, dotSpeedX, dotSpeedY;
let titleSize = 32;
let titleGrow = true;
let titleChangeCount = 0;

let nameX = 100;
let nameY = 350;
let nameDir = 'right';

let headSize = 150;
let headGrow = true;

function setup() {
    createCanvas(400, 400);

    eyeLX = 170;
    eyeRX = 230;
    eyeLY = 130;
    eyeRY = 130;

    eyeLSpeedX = random(1, 3);
    eyeRSpeedX = random(1, 3);
    eyeLSpeedY = random(1, 3);
    eyeRSpeedY = random(1, 3);

    dotX = 200;
    dotY = 175;
    dotSpeedX = random(1, 2);
    dotSpeedY = random(1, 2);
}

function draw() {
    background(255);

    textAlign(CENTER, TOP);
    textSize(titleSize);
    fill(0);
    text('My Self-Portrait', width / 2, 10);

    if (titleGrow) {
        titleSize += 0.5;
        if (titleSize >= 40) {
            titleGrow = false;
            titleChangeCount++;
        }
    } else {
        titleSize -= 0.5;
        if (titleSize <= 32) {
            titleGrow = true;
            titleChangeCount++;
        }
    }

    if (titleChangeCount >= 10) {
        titleChangeCount = 0;
    }

    if (headGrow) {
        headSize += 0.3;
        if (headSize > 160) headGrow = false;
    } else {
        headSize -= 0.3;
        if (headSize < 140) headGrow = true;
    }

    fill(255, 224, 189);
    ellipse(200, 150, headSize, headSize);

    eyeLX += eyeLSpeedX;
    eyeLY += eyeLSpeedY;
    eyeRX += eyeRSpeedX;
    eyeRY += eyeRSpeedY;

    if (eyeLX < 160 || eyeLX > 180) {
        eyeLSpeedX *= -1;
        fill(random(255), random(255), random(255)); 
    }
    if (eyeLY < 120 || eyeLY > 140) eyeLSpeedY *= -1;

    if (eyeRX < 220 || eyeRX > 240) {
        eyeRSpeedX *= -1;
        fill(random(255), random(255), random(255)); 
    }
    if (eyeRY < 120 || eyeRY > 140) eyeRSpeedY *= -1;

    fill(255);
    ellipse(eyeLX, eyeLY, 40, 40);
    ellipse(eyeRX, eyeRY, 40, 40);

    fill(0);
    ellipse(eyeLX, eyeLY, 15, 15);
    ellipse(eyeRX, eyeRY, 15, 15);

    fill(0, 102, 204);
    rect(150, 225, 100, 150);

    dotX += dotSpeedX;
    dotY += dotSpeedY;
    if (dotX < 195 || dotX > 205) {
        dotSpeedX *= -1;
        fill(random(255), random(255), random(255));
    }
    if (dotY < 170 || dotY > 180) {
        dotSpeedY *= -1;
        fill(random(255), random(255), random(255));
    }

    fill(0);
    ellipse(dotX, dotY, 5, 5);

    stroke(0);
    line(170, 210, 230, 210);

    fill(255, 223, 0);
    triangle(150, 70, 250, 70, 200, 40);

    fill(0);
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text('Cullen Bertsch', nameX, nameY);

    switch (nameDir) {
        case 'right':
            nameX += 1;
            if (nameX >= 300) nameDir = 'down';
            break;
        case 'down':
            nameY += 1;
            if (nameY >= 390) nameDir = 'left';
            break;
        case 'left':
            nameX -= 1;
            if (nameX <= 100) nameDir = 'up';
            break;
        case 'up':
            nameY -= 1;
            if (nameY <= 350) nameDir = 'right';
            break;
    }
}
