var gameState='START'

var standing,standingLeft,runningLeft,slidingLeft,jumpingLeft,running,jumping,sliding,eliminated,ladder,Platform1,platform2,ground,shrub,Ti,wood,zen,ionCube,cave,tunnel
//Platform1=big,platform2=small
var play,playImg,settings,settingsImg,login,loginImg

function preload(){
standing=loadAnimation('assets/standing1.png','assets/standing2.png')
running=loadAnimation('assets/run1.png','assets/run2.png','assets/run3.png','assets/run4.png')
jumping=loadAnimation('assets/jump1.png','assets/jump2.png')
sliding=loadAnimation('assets/slide.png')

standingLeft=loadAnimation('assets/standingLeft1.png','assets/standingLeft2.png')
runningLeft=loadAnimation('assets/runLeft1.png','assets/runLeft2.png','assets/runLeft3.png','assets/runLeft4.png')
jumpingLeft=loadAnimation('assets/jumpLeft1.png','assets/jumpLeft2.png','assets/jumpLeft3.png')
slidingLeft=loadAnimation('assets/slideLeft.png')

eliminated=loadAnimation('assets/eliminated.png')

settingsImg=loadImage('assets/settings.png')
loginImg=loadImage('assets/login.png')
playImg=loadImage('assets/play.png')

ladder=loadImage('assets/ladder.png')
platform2=loadImage('assets/flying platform1.png')
Platform1=loadImage('assets/flying platform2.png')
ground=loadImage('assets/main platform.png')
shrub=loadImage('assets/shrub.png')
Ti=loadImage('assets/titanium.png')
wood=loadImage('assets/wood.png')
zen=loadImage('assets/standing1.png')
ionCube=loadImage('assets/ion cube.png')
cave=loadImage('assets/cave.png')
tunnel=loadImage('assets/tunnel.png')

jumping.playing=true;

}

function setup() {
 createCanvas(800,400);

 frameRate(13)
 zen=createSprite(50,200);
 zen.addAnimation('stand',standing)
 zen.addAnimation('jump',jumping)
 zen.addAnimation('run',running)
 zen.addAnimation('slide',sliding)

 zen.addAnimation('runLeft',runningLeft)
 zen.addAnimation('standLeft',standingLeft)
 zen.addAnimation('jumpLeft',jumpingLeft)
 zen.addAnimation('slideLeft',slidingLeft)

 base=createSprite(400,400,800,105)
 base.visible=false;
//jumping.frameDelay
 ground1=createSprite(250,380)
 ground1.addImage(ground)
ground1.scale=2


}

function draw(){
  background('cyan');  
  drawSprites();
if(gameState==='START'){
 startGroup=new Group()
  play=createSprite(400,200)
  play.addImage('play',playImg)
  play.scale=1
  startGroup.add(play)

  settings=createSprite(750,350)
  settings.addImage('settings',settingsImg)
  settings.scale=0.15
  
}
zen.collide(base)
if(gameState==='PLAY'){

startGroup.destroyEach();

 if(keyDown(UP_ARROW) && zen.y>=290){
    zen.changeAnimation('jump',jumping)
    zen.velocityY=-15;
    jumping.looping=true;
  }else if(keyDown('down')){
    zen.changeAnimation('slide')
  }
 else if(keyDown('left')){
 zen.changeAnimation('runLeft')
  zen.position.x-=5
}

else if(keyDown('right')){
    zen.changeAnimation('run')
    zen.position.x+=5
  }

else{
  zen.changeAnimation('stand')
}
console.log(zen.position.y)

}
zen.velocityY+=1
}

