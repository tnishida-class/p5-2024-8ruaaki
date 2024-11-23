// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2024, 11);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m) {
  let dow = dayOfWeek(y, m, 1); // 月初めの曜日
  let startX = 50; // カレンダーの開始位置
  let startY = 50;
  let cellSize = 20;

  for (let i = 0; i < 6; i++) { // 6行まで表示 
    for (let j = 0; j < 7; j++) {//7列まで表示
      let d = i * 7 + j - dow + 1;
      if (d >= 1 && d <= daysInMonth(y, m)) {
        fill(255);
        rect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize);
        fill(0);
        textAlign(CENTER, CENTER);
        text(d, startX + j * cellSize + cellSize / 2, startY + i * cellSize + cellSize / 2);
      }
    }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // if (m < 3) {
  //   y--;
  //   m += 12;
  // }
  // let c = Math.floor(y / 100);
  // let y2 = y - 100 * c;
  // let w = (d + Math.floor((13 * (m + 1)) / 5) + y2 + Math.floor(y2 / 4) + Math.floor(c / 4) - 2 * c) % 7;
  // return (w + 7) % 7; // 0:日曜日, 1:月曜日, ...
    // 1970年1月1日（木曜日）からの経過日数を計算
    const daysFrom19700101 = daysSince19700101(y, m, d);
  
    // 基準日の曜日（木曜日）は4
    const baseDayOfWeek = 4;
  
    // 経過日数を7で割った余りが、その日の曜日
    return (baseDayOfWeek + daysFrom19700101) % 7;
  }
  
  // 1970年1月1日から指定された日付までの経過日数を計算する関数
  function daysSince19700101(y, m, d) {
    // // 1970年1月1日から前の年は考慮しない
    // if (y < 1970) {
    //   return 0;
    // }
  
    // 各年の日数と、各月の日数を合計
    let days = 0;
    for (let year = 1970; year < y; year++) {//y年まで
      days += daysInYear(year);//各年の日数を計算、繰り返すのでdaysにどんどん足されていく
    }
    for (let month = 1; month < m; month++) {
      days += daysInMonth(year, month);
    }
    days += d - 1; // 当月の1日からの経過日数を加算
  
    return days;
  }
  


function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
