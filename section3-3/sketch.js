let x, y, vx, vy;
const g = 0.5; //重力加速度
const vyMax = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}
function draw() {
  background(160, 192, 255);
  fill(255);
  ellipse(x, y, 50, 50);
  fill(128, 0, 0)
  rect(0, 700, windowWidth, 500); 
  rect(0, 413, 100, 500);
  x += vx;
  y += vy;
  
  vy = constrain(vy + g, -vyMax, vyMax);
  
  if( 675 <= y ) // 下の段の縦軸
  { 
    vy = 0 * vy; y = 675;
    if(vy == 0 && keyIsDown(UP_ARROW)){vy -= 20;} 
    
  }
  if(125 < x && x < windowWidth)
  {if(keyIsDown(LEFT_ARROW)){ x -= 10; }
   if(keyIsDown(RIGHT_ARROW)){ x += 10; }
   x = constrain(x, 125, windowWidth);
}
  if(windowWidth<= x){
    vx = 0 * vx;
    x = windowWidth;
    if(keyIsDown(LEFT_ARROW)){ x -= 10; }
  }
  if( (-25 <= x && x <= 126) && y <= 400)
     { 
      if(y >= 370 && x < 125){
         vy = 0 * vy;
         y = 385;
         vx = 0 * vx;}
        x = constrain(x, 25, windowWidth);
        y = constrain(y, 0, 385);
       if(vy == 0 && keyIsDown(UP_ARROW)){vy -= 20;} 
       if(keyIsDown(LEFT_ARROW)){ x -= 10; }
       if(keyIsDown(RIGHT_ARROW)){ x += 10; }
     }

  if( (0 < x && x <= 125) && y > 400)
    {  
      if(keyIsDown(RIGHT_ARROW)){ x += 10; }
    }

  if(keyIsDown(LEFT_ARROW) && keyIsDown("S".charCodeAt(0))){ x-= 20; }
  if(keyIsDown(RIGHT_ARROW) && keyIsDown("S".charCodeAt(0))){ x+= 20; }
}
function windowResized(){ // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}