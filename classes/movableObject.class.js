class MovableObject {
  x;
  y;
  img;
  height;
  width;
  imgCache = {};
  currentImage = 0;
  speed = 0.15;
  keyboard;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  health;
  lastHit = 0;


  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 180;
  }

  isOnGround() {
    return this.y === 180;
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  playAnimation(arr) {
    let i = this.currentImage % arr.length;
    let path = arr[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  jump() {
    this.speedY = 30;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof LittleChicken ||
      this instanceof BigChicken ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  isHit(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0;
    } else{
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

}
