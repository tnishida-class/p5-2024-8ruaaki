// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
    //scores[0] = 39, scores[1] = 88,...,scores[9] = 56
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;//横幅をscoresの数で割る
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
  const h = height * scores[i] / 100; // 高さを計算,縦幅にscoresのパーセンテージをかける
  const w = i * dx; // x座標を計算
  ellipse(w, h, 5, 5);
  if (i > 0) { // 2点目以降の場合
  line(px, py, w, h); // 前の点と現在の点を結ぶ線を描く
  }
  px = w; // 次の計算のために、現在のx座標をpxに代入
  py = h; // 次の計算のために、現在のy座標をpyに代入  
  }
}
