
let x = -100
let x_cloud = 800
let x_cloud2 = 800
let x_car = -100
let x_car2 = 900
let x_moon = -1000


let Traffic_green = false
let Traffic_orange = false
let Traffic_red = false

let functioncounter = 0;

let daylight = true;



function setup() {
  createCanvas(900, 600);

}

function draw() {

  //day night cycle
  if (!daylight) {
    background(10)

  }else {
    background(104, 200, 227)
  }
  
  if (x == 780) {
    daylight = !daylight
  }

//Sun / moon
  fill("Yellow")
  circle(x, 100, 90)
  fill(227, 226, 188), circle(x_moon, 100, 90)
  fill(10), circle(x_moon+ 20, 100, 60)

  //x  Speedsun / speedmoon
  x = x +1;
  if(x == 800) {
    x = -100
  }

  x_moon = x_moon +1;
  if (x_moon == 800){
    x_moon = -1000    
  }

//Mountain
  strokeWeight(0)
  fill("Gray"), triangle(0, 800, 180, 120, 450, 800)

  
//cloud
  strokeWeight(0)
  fill(255)
  circle(x_cloud + 0, 210, 40), circle(x_cloud + 20, 210, 40), circle(x_cloud + 50, 215, 40), circle(x_cloud + 30, 200, 40)
  x_cloud = x_cloud-1.5;
  if (x_cloud == -100) {
    x_cloud = 800
  }

  fill(255), circle(x_cloud2+ 80, 160, 40), circle(x_cloud2+ 70, 150, 50), circle(x_cloud2+ 50, 135, 30), circle(x_cloud2+50, 160, 30)
  x_cloud2 = x_cloud2-2;
  if (x_cloud2 == -100) {
    x_cloud2 = 800
  }


//tree 2
  fill("Brown")
  strokeWeight(1)
  rect(250, 480, 20, 175)

  fill("Green")
  strokeWeight(0)
  circle(280, 420, 90)
  circle(230, 450, 100)
  circle(290, 480, 70)
 


  //Traffic lights
  strokeWeight(0)
  fill(50), rect(600, 300, 50, 180, 10), rect(615, 480, 20, 120)
  Traffic_red = fill(156, 31, 22), circle(625, 330, 40)
  Traffic_orange = fill(237, 120, 17), circle(625, 380, 40)
  Traffic_green = fill("green"), circle(625, 430, 40)


//Car 1
  strokeWeight(1)
  fill("Blue"), rect(x_car, 570, 100, 20), rect(x_car + 10, 550, 60, 20),
  fill("60"), rect(x_car + 20, 555, 20, 15), rect(x_car + 45, 555, 20, 15),
  fill("Black"), circle(x_car + 20, 590, 20), circle(x_car + 70, 590, 20)

//Car 2
  fill("red"), rect(x_car2-260, 550, 100, 40), rect(x_car2-290, 570, 40, 20), rect(x_car2-200, 570, 70, 20)
  fill("60"), rect(x_car2- 260, 553, 35, 20), rect(x_car2-220, 553, 40, 20)
  fill("Black"), circle(x_car2-250, 590, 25), circle(x_car2-170, 590, 25)


//Function traffic light/car
  if (functioncounter === 1) {
    Traffic_red = fill("red"), circle(625, 330, 40)
    x_car = x_car+0;

  }else if (functioncounter === 2) {
    Traffic_orange = fill("orange"), circle(625, 380, 40)
    x_car = x_car+2;
    if (x_car >= 1000) {
      x_car = -100
    }

  }else if (functioncounter === 3) {
    Traffic_green = fill(35,148,22), circle(625, 430, 40)
    x_car = x_car+4;
    if (x_car >= 1000) {
      x_car = -100
    }

  }else {
    x_car = x_car+4;
    if (x_car >= 1000) {
      x_car = -100
    }
  }

  //Function Traffic light/car 2
  if (functioncounter === 1) {
    Traffic_red = fill("red"), circle(625, 330, 40)
    x_car2 = x_car2-0;

  }else if (functioncounter === 2) {
    Traffic_orange = fill("orange"), circle(625, 380, 40)
    x_car2 = x_car2-3;
    if (x_car2 == -100) {
      x_car2 = 1000
    }

  }else if (functioncounter === 3) {
    Traffic_green = fill(35,148,22), circle(625, 430, 40)
    x_car2 = x_car2-5;
    if (x_car2 <= -100) {
      x_car2 = 1000
    }

  }else {
    x_car2 = x_car2-4;
    if (x_car2 <= -100) {
      x_car2 = 1000
    }
  }


//tree 1
  fill("Brown")
  strokeWeight(1)
  rect(100, 400, 20, 200)

  fill("Green")
  strokeWeight(0)
  circle(75,  350, 100)
  circle(135, 380, 80) 
  circle(100, 400, 100)

//tree 3
  fill("Brown")
  strokeWeight(1)
  rect(430, 470, 20, 150)


  fill("Green")
  strokeWeight(0)
  circle(410, 410, 90)
  circle(460, 440, 100)
  circle(410, 450, 80)


}


function keyPressed() {
  if (keyCode === 13) {
    functioncounter = (functioncounter+1) & 3;
  } 
}

