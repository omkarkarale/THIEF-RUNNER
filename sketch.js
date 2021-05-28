var laser1,laser2,laser3,thief,diabox,edges;

function setup(){
  laser3 = createSprite(5, 200, 10, 5);
  laser3.shapeColor = "red";
  laser3.velocityX = 35;
  laser1 = createSprite(300, 378, 200, 5);
  laser1.shapeColor = "red";
  laser1.velocityY = -2;
  laser2 = createSprite(100, 25, 200, 5);
  laser2.shapeColor = "red";
  laser2.velocityY = 2;
  thief = createSprite(10, 390, 20, 20);
  diabox = createSprite(390, 10, 25, 25);
  diabox.shapeColor = "blue";
  edges = new Group();
  up_edge = createSprite(width/2,0,width,1);
  // up_edge.visible = false;
  edges.add(up_edge);
  right_edge = createSprite(width,height/2,1,height);
  // right_edge.visible = false;
  edges.add(right_edge);
  bottom_edge = createSprite(width/2,height,width,1);
  // bottom_edge.visible = false;
  edges.add(bottom_edge);
  left_edge = createSprite(0,height/2,1,height);
  // left_edge.visible = false;
  edges.add(left_edge);
}
function draw() {
  background("black");
  shape(390, 0, 380, 10, 390, 20, 400, 10);
  createEdgeSprites();
  if (keyDown(UP_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = -2;
  }
  if (keyDown(DOWN_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = 2;
  }
  if (keyDown(LEFT_ARROW)) {
    thief.velocityX = -2;
    thief.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    thief.velocityX = 2;
    thief.velocityY = 0;
  }
  if (thief.isTouching(edges)) {
    thief.bounceOff(edges);
  }
  if (thief.isTouching(diabox)) {
    diabox.visible = false;
    laser1.setVelocity(0, 0);
    laser2.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    thief.setVelocity(0, 0);
    fill("yellow");
    textSize(20);
    textFont("Arial");
    text("THIEF GOT DIAMOND", 100, 200);
  }
  if (laser1.isTouching(edges)) {
    laser1.bounceOff(edges);
  }
  if (laser2.isTouching(edges)) {
    laser2.bounceOff(edges);
  }
  if (laser3.isTouching(edges)) {
    laser3.bounceOff(edges);
  }
  if (thief.isTouching(laser1) || thief.isTouching(laser2) || thief.isTouching(laser3)) {
    laser1.setVelocity(0, 0);
    laser2.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    thief.setVelocity(0, 0);
    fill("yellow");
    textSize(20);
    textFont("Arial");
    text("THIEF IS CAUGHT", 100, 200);
  }
  drawSprites();
}
