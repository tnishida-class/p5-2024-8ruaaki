// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(120, 120);
  background(0, 51, 153);
  noStroke();
  for(let i = 0; i < 12; i++){//0~11の12回
    let theta = TWO_PI * i / 12;//theta ＝ 2π × 0 ÷ 12 = 0, 2π × 1 ÷ 12 = π/6(30°),2π × 2 ÷ 12 = π/3(60°)...
    let x = width/2 + cos(theta) * width/4;//width/2は中心、cosは角度、width/4は中心からの距離
    let y = height/2 + sin(theta) * height/4;
    fill(255, 204, 0);
    star(x, y, width/20);
    }
  }
  
  function star(cx, cy, r){
    beginShape();
    for (let i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
