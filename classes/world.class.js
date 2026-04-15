class World {
  character = new Character();
  bottle = new Bottle();
  clouds = [new Cloud1()];
  coin = new Coin();
  ctx;
  canvas;
  background = [
    new BackgroundLayer1(),
    new BackgroundLayer2(),
    new BackgroundLayer3(),
    new BackgroundLayerAir(),
  ];
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
    this.character.moveCharacter();
    // this.enemys.forEach((enemy) => {
    //   enemy.movingEnemy();
    // });
  }

  draw() {
    this.ctx.globalCompositeOperation = "destination-over";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.character);

    this.enemys.forEach((item) => {
      this.addToMap(item);
    });
    this.clouds.forEach((item) => {
      this.addToMap(item);
    });
    this.background.forEach((item) => {
      this.addToMap(item);
    });

    let self = this;
    // Draw() wird immer wieder aufgerufen, damit die Bewegungen der Enemys sichtbar werden
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
