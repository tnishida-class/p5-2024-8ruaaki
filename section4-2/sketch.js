//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];//ballsという名前の配列
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){//for (初期化式; 条件式; 増減式) { 繰り返したい処理}
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  if (frameCount % 30 === 0) { // ##フレームごとに
    const m = {
      x: random(width),
      y: random(height),
      size: random(10, 20),
      vx: random(-2, 2),
      vy: random(-2, 2)
    };
    balls.push(m);
  }
  for (let i = 0; i < balls.length - 1; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      let b1 = balls[i];
      let b2 = balls[j];

      let distance = dist(b1.x, b1.y, b2.x, b2.y);
      let hankei = b1.size/2 + b2.size/2;

      if (distance <= hankei) {
        // 衝突したとき反転
        b1.vx *= -2;
        b1.vy *= -2;
        b2.vx *= -2;
        b2.vy *= -2;
      }
     
    }
   }
  }


function mouseDragged(){
  const dx = mouseX - pmouseX;//マウスのX座標の移動距離
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 10){
    const b = { x: mouseX, y: mouseY, size: random(10,20), vx: dx, vy: dy };//マウス移動量の速度を追加
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
