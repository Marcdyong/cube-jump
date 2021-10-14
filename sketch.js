let player;
let obstacle;
let gameOver = false;
let score = 0;
let scoreSent = false;
let gameStarted = false;

function setup() {
  let canvas = createCanvas(800, 300);
  canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());
  player = new Player();
  obstacle = new Obstacle(750, 10, 250, "lightblue");
  textSize(20);
  textAlign();
}

function draw() {
  // Aufgabe 9: Zeige den Score als Text oben links auf dem Canvas an

  if (gameOver) {
    textSize(35)
    fill("black")
    text("GAME OVER", 250, 75)
    textSize(20)
    text("Press 'b'", 320, 100)
    if (scoreSent == false) {
      let url = "https://codeweek-scoreboard-b92vu.ondigitalocean.app/score";
      let postData = {
        game: "dino3",
        userName: "Marc",
        score: score,
      };
      httpPost(url, "json", postData);
      scoreSent = true;
    }

    return;
  }

  hintergrund();
  if (gameStarted == false) {
    textSize(30)
    fill("black");
    text("Press 'b' to start", 250, 75);
    textSize(15)
    text("Made by 'Shadow'", 650, 285)
    fill("yellow")
    rect(320,140,75,75)
    
    fill("blue")
    rect(330,150,20,20)
    rect(365, 150,20,20)
    fill("white")
    rect(325,180,65,20)
    fill("red")
    triangle(355,100,370,140,340,140)
    fill("purple")
    circle(355,100,15)
    fill("yellow")
    circle(353,120,5)
    circle(350,133,5)
    circle(360,130,5)
    return;
  }
  player.move();
  player.draw();
  
  textSize(20)
  fill("black");
  text("score " + score, 60, 90);

  if (!keyIsPressed) {
    player.unduck();
  }

  obstacle.move();
  obstacle.draw();

  if (obstacle.collide(player)) {
    console.log("Game over x(");
    gameOver = true;
  }

  if (obstacle.isOutsideCanvas()) {
    let zufall = round(random(0, 1));
    let farbe = zufall ? "lightblue" : "pink";
    obstacle = new Obstacle(750, 10, random(150, 250), farbe);
    score += 10;
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    player.startJump();
  }
}
function keyPressed() {
  if (key === " ") {
    player.duck();
  }
  if (key == "b" && gameOver) {
    score = 0;
    gameOver = false;
    gameStarted = false;
    player = new Player();
    obstacle = new Obstacle(750, 10, 250, "lightblue");
    print("resetted");
  }else if (key == "b" && !gameOver && !gameStarted) {
    gameStarted = true;
    print("started");
  }
}
function hintergrund() {
  background(94, 22, 238);
  fill("white");
  circle(50, 50, 5);
  circle(70, 100, 5);
  circle(110, 80, 5);
  circle(300, 50, 5);
  circle(300, 100, 5);
  circle(400, 50, 5);
  circle(400, 100, 5);
  circle(450, 30, 5);
  circle(500, 20, 5);
  circle(550, 40, 5);
  circle(130, 30, 5);
  circle(700, 50, 5);
  circle(780, 30, 5);
  circle(760, 150, 5);
  line(510, 130, 500, 135);
  line(525, 141, 525, 151);
  line(540, 132, 550, 142);
  fill("lightgrey");
  circle(525, 125, 25);
  fill("grey");
  circle(526, 129, 3);
  circle(531, 120, 4);
  circle(521, 121, 3);
  fill("darkgreen");
  triangle(300, 300, 100, 300, 200, 110);
  triangle(700, 300, 500, 300, 600, 110);
  triangle(300, 300, 500, 300, 400, 150);
  triangle(125, 300, 25, 300, 75, 200);
  triangle(800, 300, 700, 300, 750, 200);
  triangle(750, 300, 650, 300, 700, 225);
  triangle(350, 300, 250, 300, 300, 225);
  triangle(550, 300, 450, 300, 500, 225);
  triangle(75, 300, -25, 300, 25, 225);
  fill("white");
  triangle(225, 160, 175, 160, 200, 110);
  triangle(625, 160, 575, 160, 600, 110);
  triangle(415, 170, 385, 170, 400, 150);
}
