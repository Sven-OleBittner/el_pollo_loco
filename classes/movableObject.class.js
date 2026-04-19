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
    return (this.y = 180);
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
        this.otherDirection = false;
  }

  moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
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
}
