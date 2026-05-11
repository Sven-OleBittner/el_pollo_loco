class World {
  character = new Character();
  level = level1;
  coin = new Coin();
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  healthBarPepe = new HealthBarPepe(this);
  bottleBarPepe = new BottleBarPepe(this);
  coinBarPepe = new CoinBarPepe(this);
  throwableObjects = [];
  collectibleObjects = [
    new BottleObject(),
    new BottleObject(),
    new BottleObject(),
    new BottleObject(),
    new Coin(),
    new Coin(),
    new Coin(),
  ];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.collectibleObjects);
    if (this.character.bottles > 0) {
      this.addObjectsToMap(this.throwableObjects);
    }

    this.ctx.translate(-this.camera_x, 0);
    // space for static objects like statusbars
    this.addToMap(this.healthBarPepe);
    this.addToMap(this.bottleBarPepe);
    this.addToMap(this.coinBarPepe);
    this.ctx.translate(this.camera_x, 0);

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
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.isHit(20);
        this.healthBarPepe.drawStatusBar("healthbar");
        console.log("hit :" + this.character.health);
      }
    });
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkCollisionsBottle();
    }, 200);
  }

  checkCollisionsBottle() {
    if (this.keyboard.D_KEY) {
      let bottle = new ThrowableObject(
        this,
        this.character.x,
        this.character.y,
      );
      this.throwableObjects.push(bottle);
    }
  }

  isDead(mo) {
    return mo.health == 0;
  }

  collectObjects() {
    if (this.isColliding(this.character, this.collectibleObjects)) {
      this.collected = true;
      this.character.coins += 1;
      this.coinBarPepe.drawStatusBar("coinbar");
      this.character.bottles += 1;
      this.bottleBarPepe.drawStatusBar("bottlebar");
      return true;
    } else {
      return false;
    }
  }

  collectBottle() {
    if (this.isColliding(this.character, this.collectibleObjects)) {
      this.collected = true;
      this.character.bottles += 1;
      this.bottleBarPepe.drawStatusBar("bottlebar");
      return true;
    } else {
      return false;
    }
  }

  collectCoin() {
    if (this.isColliding(this.character, this.collectibleObjects)) {
      this.collected = true;
      this.character.coins += 1;
      this.coinBarPepe.drawStatusBar("coinbar");
      return true;
    } else {
      return false;
    }
  }
}
