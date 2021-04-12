var box;
var object1,object2,object3,object4;

var edges;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    object1=createSprite(85,580,170,20);
    object1.shapeColor="orange";
    object2=createSprite(280,580,200,20);
    object2.shapeColor="yellow";
      
    object3=createSprite(490,580,200,20);
    object3.shapeColor="red";
    object4=createSprite(700,580,200,20);
    object4.shapeColor="blue";

    //create box sprite and give velocity
    box=createSprite(Math.round(random(0,750)),Math.round(random(0,600)),30,30);
    box.velocityX=5;
    box.velocityY=8;
    
    box.shapeColor="green";
 

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(object1);
    box.bounceOff(object2);
    
    box.bounceOff(object4);
    
    //add condition to check if box touching surface and make it box
  
  
    if(istouching()){
        box.shapeColor="red";
        box.shapeColor="red";

    }
    else{
        box.shapeColor="green";
        box.shapeColor="green";
        }
       
    
    drawSprites();
}


function istouching(){

 if(box.x-object3.x<object3.width/2+box.width/2 &&
     object3.x-box.x<object3.width/2+box.width/2
     &&box.y-object3.y<object3.height/2+box.height/2 &&
     object3.y-box.y<object3.height/2+box.height/2)
     {
         box.velocityX=0;
         box.velocityY=0;
   return true;
   }

else{
   return false;
}
}


