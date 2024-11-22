// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  //(例)[73, 52, 94, 25, 87, 30, 95, 35, 59, 39]
  let scores = [];
  for(let i = 0; i < 10; i++){//iが9になるまで（10回）
    scores[i] = random(20, 100); // 60以上(20以上です。)100未満のランダムな数を代入
  } //scores[0] = 73, scores[1] = 52 ～ scores[9] = 39
  console.log(scores);

  // 合計を計算する
  let sum = 0;//初期化
  for(let i = 0; i < scores.length; i++){//let i = 0で初期化、iをscoresの数まで1ずつ増加
    sum += scores[i]; //scores[0]+scores[1]+ ～ + scores[9]
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;//宣言(?)
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）
  average = sum / scores.length;//合計/個数
  largest = 0;//初期化
  for(let i = 0; i < scores.length; i++){//iが0~9までlargestと比較し、scores[i]の方が大きければlargestを更新
    if(scores[i] > largest){largest = scores[i];}
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if(scores[i] < smallest)
      {smallest = scores[i];}
    // BLANK[3]　ヒント：最小値とだいたい同じ
  }
  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = scores.length;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();//グラフの枠線

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    //BLANK[4] ヒント: 条件分岐を使って色を変更します
    if(scores[i] == largest){
      fill(255, 0, 0);  
    }
    else if(scores[i] == smallest){fill(0, 0, 255);}
    else{fill(100);}
    rect(i * dx + 2, height - h, dx - 10, h);
    
    text(scores[i].toPrecision(3), i * dx, height - h);
  }

  // BLANK[5] 平均点の線を引きます
  stroke(0); // 線の色を黒にする
  line(0, height - average * height / 100, width, height - average * height / 100);
  noStroke(); // 線の色を元に戻す
}