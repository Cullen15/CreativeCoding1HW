function setup() {
    createCanvas(400, 400); 
    background(255); 

    
    textSize(32);
    textAlign(CENTER, TOP);
    text('My Self-Portrait', width / 2, 10);

   
    fill(255, 224, 189); 
    ellipse(200, 150, 150, 150); 

    
    fill(255); 
    ellipse(170, 130, 40, 40); 
    ellipse(230, 130, 40, 40); 

    fill(0); 
    ellipse(170, 130, 15, 15); 
    ellipse(230, 130, 15, 15); 

    
    fill(0, 102, 204); 
    rect(150, 225, 100, 150); 

   
    fill(0); 
    ellipse(200, 175, 5, 5);

    
    stroke(0); 
    line(170, 210, 230, 210); 

    
    fill(255, 223, 0); 
    triangle(150, 70, 250, 70, 200, 40);

   
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text('Cullen Bertsch', width / 2, 380); 
}

