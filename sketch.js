var ball, edges, paddle, paddle2, brinks;
var score, score2;

function setup() {
  createCanvas(600, 400);

  //comando da bola
  ball = createSprite(200, 200, 20, 20);
  ball.shapeColor = "write";

  //velocidade da bola
  ball.velocityY = -5;
  ball.velocityX = -6;

  //comando da raquete
  paddle = createSprite(15, 200, 10, 100);
  paddle.shapeColor = "write";
  //comandoda raquete2
  paddle2 = createSprite(585, 200, 10, 100);
  paddle2.shapeColor = "write";

  //criando as bordas de tela
  edges = createEdgeSprites();

  //criando pontuação
  score = 0;
  //criando pontuação2
  score2 = 0;
}
function draw() {
  background(0);

  //texto da pontuação
  textSize(20);
  text("play 1: " + score, 100, 20);

  //texto da pontuação2
  textSize(20);
  text("play 2: " + score2, 400, 20);

  //a bola colidindo com as paredes
  ball.bounceOff(edges);

  //as raquetes colidindo com as paredes
  paddle.collide(edges);
  paddle2.collide(edges);

  //a bola colidindo com as raquetes
  ball.bounceOff(paddle);
  ball.bounceOff(paddle2);

  //comando das teclas
  if (keyDown("w")) {
    paddle.velocityY = -6;
  }

  if (keyDown("s")) {
    paddle.velocityY = 6;
  }
  if (keyDown(UP_ARROW)) {
    paddle2.velocityY = -6;
  }

  if (keyDown(DOWN_ARROW)) {
    paddle2.velocityY = 6;
  }

  if (ball.x < 15) {
    score += 1;
    ball.x = 300;
    ball.y = 200;
  }

  if (ball.x > 585) {
    score2 += 1;
    ball.x = 300;
    ball.y = 200;
  }

  drawSprites();
}
