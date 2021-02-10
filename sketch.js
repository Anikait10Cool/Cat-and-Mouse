var  gardenImg, cat, catImg, mouse, mouseImg;
function preload() {
    gardenImg.loadImg("garden.png");
    catImg.loadImg("cat1.png");
    mouseImg.loadImg("mouse4.png");
}
function setup(){
    createCanvas(1000,800);
 
  garden.addImage(gardenImg);
  cat = createSprite(800,800,50,80);  
  cat.addImage(catImg);
  cat.debug = "true";
  mouse = createSprite(200,800,50,80);  
  mouse.addImage(mouseImg);
  mouse.debug = "true";
  cat.y=World.mouseY
  cat.x=World.mouseX
}
function draw() {
    background= createSprite(1000,80,1000,800);
    background.addImage(gardenImg);
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2
        && cat.y - mouse.y < mouse.height/2 + cat.height/2) {
      mouse.addImage(mouse1.png)
    }
    drawSprites();
}

