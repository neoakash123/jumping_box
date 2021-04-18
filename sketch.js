var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
//create 4 different surfaces

surface1 = createSprite(0,550,300,20);
surface1.shapeColor = rgb(50,0,255);


surface2 = createSprite(295,550,200,20);
surface2.shapeColor = rgb(242,7,218);

surface3 = createSprite(515,550,200,20);
surface3.shapeColor = rgb(242,242,7);

surface4 = createSprite(740,550,200,20);
surface4.shapeColor = rgb(242,135,21);

    //create box sprite and give velocity

    
box= createSprite(200,200,30,30);
box.shapeColor = rgb(255,0,0);
box.velocityX = -1;
box.velocityY = 8;
}

function draw() {
    background(rgb(169,169,169));
    
    
    edges = createEdgeSprites();

    box.bounceOff(edges);

    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor = rgb(50,0,255);
        music.play();


    
    }
        
    if(surface2.isTouching(box)){
    box.shapeColor = rgb(242,7,218);
    box.velocityX = 0
    box.velocityY = 0
    music.stop();
    }
    
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor = rgb(242,242,7);
    }
    
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor = rgb(242,135,21);
    }
    
    drawSprites();
    
    //add condition to check if box touching surface and make it box
}
