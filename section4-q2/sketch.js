// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // BLANK[1]
let startAngle = 0; // 扇形の始まりの角度
for (let i = 0; i < scores.length; i++) {//scoresの数だけ
  let r = scores[i] / total; // 割合を計算
  let angle = r * TWO_PI; // 比率を角度に変換（TWO_PIEは2π、すなわち一周を表す）
  //fill(random(255)); // 各扇形の色をランダムに
  arc(width / 2, height / 2, 300, 300, startAngle, startAngle + angle); // 円弧を描画
  //arc(x, y, w, h, start, stop);
  // x, y: 円弧の中心となる点のx座標とy座標
  // w, h: 円弧の外接する楕円の幅と高さ。これによって円弧の大きさを調整。
  // start: 円弧の始まりの角度（ラジアン）。0は右方向を指します。
  // stop: 円弧の終わりの角度（ラジアン）。
  let nextStartAngle = startAngle + angle;
  // 円の中心から、現在の扇形の端点と次の扇形の端点に線を引く
  line(width / 2, height / 2,
       width / 2 + 150 * cos(startAngle + angle),
       height / 2 + 150 * sin(startAngle + angle)
       
       //width / 2 + 150 * cos(startAngle + angle / 2),
       //height / 2 + 150 * sin(startAngle + angle / 2),
       //width / 2 + 150 * cos(nextStartAngle / 2),
       //height / 2 + 150 * sin(nextStartAngle / 2)
      );
       //fill(0);
       textSize(16);
       // 扇形の中心角の半分を求める
       let midAngle = startAngle + angle / 2;
       // 扇形の中心から少し内側に表示
       let textX = width / 2 + 100 * cos(midAngle);
       let textY = height / 2 + 100 * sin(midAngle);
       text((r * 100).toPrecision(2) + "%", textX, textY);
    // //fill(0); // 文字の色を黒に
    // textSize(16); // 文字のサイズ
    // text(scores[i].toPrecision(3), width / 2 + 100 * cos((startAngle + angle) / 2), height / 2 + 100 * sin((startAngle + angle) / 2)); 
  startAngle += angle; // 次の扇形の始まりの角度を設定
  
}
}
