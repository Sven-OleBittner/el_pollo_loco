class DrawableObject {
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
  world;

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

    playAnimation(arr) {
    let i = this.currentImage % arr.length;
    let path = arr[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

    draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }


}
