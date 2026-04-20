class World {
  character = new Character();
  level = level1;
  bottle = new Bottle();
  coin = new Coin();
  ctx;
  canvas;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);

    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    // Draw() wird immer wieder aufgerufen, damit die Bewegungen der Enemys sichtbar werden
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
    mo.drawFrame(this.ctx);
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }

  addObjectsToMap(ObjectsArray) {
    ObjectsArray.forEach((item) => {
      this.addToMap(item);
    });
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    const hurtAnimationInterval = setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hurtAnimation();
          this.character.health -= 5;
          console.log("hit :" + this.character.health);
        }  
        if (this.isDead(this.character)) {
          this.character.deadAnimation();
          this.character.health = 0;
          console.log("game over");
          clearInterval(hurtAnimationInterval);
        }
      });
    }, 200);
  }

  isDead(mo) {
    return mo.health <= 0;
  }
}
