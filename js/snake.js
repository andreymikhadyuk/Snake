function Snake() {
  this.x = Math.floor(columns / 2) * box;
  this.y = Math.floor(rows / 2 * box);
  this.tail = [];
  this.tailCount = 0;

  this.dirX = 1;
  this.dirY = 0;
}

Snake.prototype.setDirection = function (dirX, dirY) {
  if ((-this.dirX === dirX && dirY === 0) || (-this.dirY === dirY && dirX === 0)) {
    return;
  }
  this.dirX = (dirX > 0) ? 1 : dirX === 0 ? 0 : -1;
  this.dirY = (dirY > 0) ? 1 : dirY === 0 ? 0 : -1;
}

Snake.prototype.update = function () {
  for (var i = this.tailCount - 1; i >= 0; i--) {
    if (i !== 0) {
      this.tail[i] = this.tail[i - 1];
    } else {
      this.tail[i] = { x: this.x, y: this.y };
    }
  }

  this.x += this.dirX * box;
  this.y += this.dirY * box;

  this.x = (this.x < 0) ? width - box : (this.x >= width) ? 0 : this.x;
  this.y = (this.y < 0) ? height - box : (this.y >= height) ? 0 : this.y;
}

Snake.prototype.eats = function (apple) {
  return this.x === apple.x && this.y === apple.y;
}

Snake.prototype.increaseTail = function (apple) {
  this.tailCount++;
}

Snake.prototype.isDead = function (apple) {
  var dead = false;
  for (var i = this.tail.length - 1; i >= 0; i--) {
    if (this.tail[i].x === this.x && this.tail[i].y === this.y) {
      dead = true;
      break;
    }
  }
  if (dead) {
    this.tail = this.tail.slice(0, i);
    this.tailCount = i;
  }
}

Snake.prototype.draw = function () {
  context.fillStyle = '#2E7D32';
  context.fillRect(this.x, this.y, box, box);
  for (var i = 0; i < this.tail.length; i++) {
    context.fillRect(this.tail[i].x, this.tail[i].y, box, box);
  }
}
