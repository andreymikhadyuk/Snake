var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var framesCounter = 0;

var box = 20;
var rows = height / box;
var columns = width / box;

var snake = new Snake();
var apple = new Apple();

document.addEventListener('keydown', keyPressed);

checkDraw();

function draw() {
  drawBackground();
  snake.update();

  snake.isDead();

  if (snake.eats(apple)) {
    snake.increaseTail();
    apple.reset();
  }

  snake.draw();
  apple.draw();
}

function checkDraw() {
  if (framesCounter === 5) {
    draw();
    framesCounter = 0;
  }
  framesCounter++;
  requestAnimationFrame(checkDraw);
}

function keyPressed(event) {
  if (event.keyCode === 37) { // LEFT_ARROW
    snake.setDirection(-1, 0);
  } else if (event.keyCode === 38) { // UP_ARROW
      snake.setDirection(0, -1);
  } else if (event.keyCode === 39) { // RIGHT_ARROW
    snake.setDirection(1, 0);
  } else if (event.keyCode === 40) { // DOWN_ARROW
    snake.setDirection(0, 1);
  }
}

function drawBackground() {
  context.fillStyle = '#8BC34A';
  context.fillRect(0, 0, width, height);
}
