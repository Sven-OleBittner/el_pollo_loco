class World {
  character = new Character();
  bottle = new Bottle();
  clouds = [
    new Cloud1(),
    new Cloud2(),
  ];
  coin = new Coin();
  ctx;
  canvas;
  enemys = [
    new LittleChicken(),
    new LittleChicken(),
    new LittleChicken(),
    new BigChicken(),
    new BigChicken(),
    new BigChicken(),
  ];

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.draw();
    this.character.moving();
    // this.enemys.forEach((enemy) => {
    //   enemy.movingEnemy();
    // });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height,
    );
    this.drawArray(this.enemys);
    this.drawArray(this.clouds);
    let self = this;
    // Draw() wird immer wieder aufgerufen, damit die Bewegungen der Enemys sichtbar werden
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  drawArray(array) {
    array.forEach((item) => {
      this.ctx.drawImage(item.img, item.x, item.y, item.width, item.height);
    });
  }
}
