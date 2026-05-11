class MovableObject extends DrawableObject {
  speed = 0.15;
  keyboard;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  health;
  lastHit = 0;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  playAnimation(arr) {
    let i = this.currentImage % arr.length;
    let path = arr[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
    return this.y < 180;
    }
  }

  isOnGround() {
    return this.y === 180;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 30;
  }

  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  isHit(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.health <= 0;
  }

  isThrowing() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 25;
  }
}
