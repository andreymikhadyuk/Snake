function Apple() {
  this.x = Math.floor(Math.random() * (columns - 1)) * box;
  this.y = Math.floor(Math.random() * (rows - 1)) * box;
}

Apple.prototype.reset = function () {
  this.x = Math.floor(Math.random() * (columns - 1)) * box;
  this.y = Math.floor(Math.random() * (rows - 1)) * box;
}

Apple.prototype.draw = function () {
  context.fillStyle = '#FF5722';
  context.fillRect(this.x, this.y, box, box);
}
