class LittleChicken extends MovableObject {
  height = 50;
  width = 35;
  y = 375;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_small/1_walk/1_w.png`);
    this.loadImages(this.IMAGES_WALKING);
    this.animate(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;
    this.movingEnemy();
  }

  animate(imgArray) {
    setInterval(() => {
      let i = this.currentImage % imgArray.length;
      let path = imgArray[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 200);
  }

  movingEnemy() {
    setInterval(() => {
      this.x -= 0.45;
    }, 1000 / 60);
  }
}
