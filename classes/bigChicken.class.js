class BigChicken extends MovableObject {
  height = 90;
  width = 55;
  y = 340;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
    this.loadImages(this.IMAGES_WALKING);
    this.animate(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
  }

  animate(imgArray) {
    this.moveLeft();

    setInterval(() => {
      let i = this.currentImage % imgArray.length;
      let path = imgArray[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 250);
  }
}
