let x, y, vx, vy;//変数の宣言
let size = 50;
let count = 0;
let cycle = 700;//y座標
let increment = 1;
let collisionCount = 0;
let red,blue,green;

const GAME_CLEAR_COUNT = 10; 
const g = 0.5; //重力加速度
const vyMax = 30;
const msg = 'okey';

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  balls = [];
  yuwakuballs = [];
}

function draw() {
  background(255)
  fill(255);
  ellipse(x, y, 50, 50);
  fill(255)
  rect(0, 700, windowWidth, 500); 
  rect(0, 400, 100, windowHeight);
  fill(0);
  textSize(64);
  text('土日',windowWidth/2,800)
  count = (count + 0.5) % cycle;//countに代入 数字を大きくするほどゆっくりになる
  size = count;

 fill(255);
 rect(0, 0, windowWidth, size);
  x += vx;
  y += vy;
  vy = constrain(vy + g, -vyMax, vyMax);

  if( size + 25 >= y ){
    if( x < 125 ){
    y = constrain(y, size + 25, 375);
      if( y <= size + 25 ){
        y == size + 25;
        vy = -1 * vy;
      }
    }else{
      y = constrain(y, size + 25, 675); 
      if( y <= size + 25 ){
        y == size + 25;
        vy = -1 * vy;
    }
   }
  }
  
  fill(0);
  textSize(32);
  text(`消化した課題: ${collisionCount}`, 20, 40);
  text('締め切り', windowWidth/2, size-50);
  textSize(20);
  text('・^・', x - 30 , y);

  if( 675 <= y ){ 
    vy = 0 * vy; 
    y = 675;
    if(vy == 0 && keyIsDown(UP_ARROW)){vy -= 20;} 
  }

  if( 125 <= x && x <= windowWidth-25 && y >= 375) {
   if(keyIsDown(LEFT_ARROW)){ x -= 10; }
   if(keyIsDown(RIGHT_ARROW)){ x += 10; }
   x = constrain(x, 125, windowWidth-25);
  }

  if( y <= 375 ){
   if(keyIsDown(LEFT_ARROW)){ x -= 10; }
   if(keyIsDown(RIGHT_ARROW)){ x += 10; }
   x = constrain(x, 25, windowWidth-25);
  }

  if( y >= 375 && x < 125){
    vy = 0 * vy;
    y = 375;
    console.log(msg);
    if( vy == 0 && keyIsDown(UP_ARROW)){ vy -= 20; }
  }

  for(let i = 0; i < balls.length; i++){//for (初期化式; 条件式; 増減式) { 繰り返したい処理}
    let b1 = balls[i];
    if( 655 > b1.y && 150 < b1.x || 350 > b1.y && 150 > b1.x){
    fill(0);
    ellipse(b1.x, b1.y, b1.size);}
    b1.x += b1.vx;
    b1.y += b1.vy;
  
  }
  for(let i = 0; i < yuwakuballs.length; i++){//for (初期化式; 条件式; 増減式) { 繰り返したい処理}
    let b2 = yuwakuballs[i];
    if( 655 > b2.y && 150 < b2.x || 350 > b2.y && 150 > b2.x){
      if(size < 100 || 300 >= size && 400 > size || size >= 600 && size < 700){
      red = 255;
    }else{
      red = 0;
    }
      if(size >= 100 && size < 200 || size >= 400 && size < 500){
      blue = 255;
    }else{
      blue = 0;
    }
      if(size >= 200 && size < 300 || size >= 500 && size < 600){
      green = 255;
    }else{
      green = 0;
      }
      fill(red,blue,green);
    ellipse(b2.x, b2.y, b2.size);}
    b2.x += b2.vx;
    b2.y += b2.vy;
  
  }
  if (frameCount % 50 === 0) { // ##フレームごとに
    const m = {
      x: random(windowWidth),
      y: random(0),
      size: 100,
      vx: random(-2, 2),
      vy: random(4, 8)
    };
    balls.push(m);
  }
  if (frameCount % 50 === 0) { // ##フレームごとに
    const n = {
      x: random(windowWidth),
      y: random(0),
      size: 100,
      vx: random(-2, 2),
      vy: random(4, 8)
    };
    yuwakuballs.push(n);
  }


  for (let i = 0; i < balls.length ; i++) {
      let b1 = balls[i];
      let distance = dist(x, y, b1.x, b1.y);
      let hankei = 25 + b1.size/2;
      
      if (distance <= hankei) {
        b1.vx *= -1;
        b1.y -= 1000;
        b1.vy *= -1;
        vx = -vx;
        vy = -vy;
        collisionCount++; 
  
        if (collisionCount >= GAME_CLEAR_COUNT) {
          // ゲームオーバー処理
          background(255);
          textSize(64);
          fill(0)
          text("休みを守った！", width / 2 - 150, height / 2);
          noLoop();
        }
      }

      if( 655 > b1.y && 150 < b1.x|| 350 > b1.y && 150 > b1.x){
      fill(255);
      textSize(30);
      text('課題',b1.x-30,b1.y);
      }
      }
      

      for (let j = 0; j < yuwakuballs.length ; j++) {
        let b2 = yuwakuballs[j];
        let yuwakudistance = dist(x, y, b2.x, b2.y);
        let yuwakuhankei = 25 + b2.size/2;
        
        if (yuwakudistance <= yuwakuhankei) {
          b2.vx *= -1;
          b2.y -= 1000;
          b2.vy *= -1;
          vx = -vx;
          vy = -vy;
          collisionCount--; 
        
          if (collisionCount >= GAME_CLEAR_COUNT) {
            // ゲームオーバー処理
            background(255);
            textSize(64);
            fill(0)
            text("休みを守った！", width / 2 - 150, height / 2);
            noLoop();
          }
        }

        if( 655 > b2.y && 150 < b2.x|| 350 > b2.y && 150 > b2.x){
        fill(255);
        textSize(30);
        text('誘惑',b2.x-30,b2.y);
        
        }
        }


      if(count >= 699){
        background(255);
          textSize(64);
          fill(0)
          text("休みが無くなった！", windowWidth / 2 - 300, height / 2);
          noLoop();
      }
}
  
 
function windowResized(){ // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}