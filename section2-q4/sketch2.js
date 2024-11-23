function setup() {
    const red = color(255, 0, 0);
    const blue = color(0, 0, 255);
    createCanvas(270, 180);
    // noStroke();
    background(255);
  
    let d = height / 13; // 縞1本の太さ
  
    for(let i = 0; i < 13; i++){
      if(i % 2 === 1){
        fill(255);
      } else{
        fill(red);
      }
      // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
      rect(0, i * d, width, (i + 1) * d);
    }
    strokeWeight(0);
    fill(blue);
    let size = d * 7;
    rect(0, 0, size * 1.3, size);
}