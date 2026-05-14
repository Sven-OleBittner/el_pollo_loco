class LittleChicken extends MovableObject {
  height = 50;
  width = 35;
  y = 375;
  offset = {
    top: 10,
    left: 5,
    right: 5,
    bottom: 10,
  };

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_small/1_walk/1_w.png`);
    this.loadImages(this.IMAGES_WALKING);
    this.animate(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
  }

  animate(imgArray) {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }

}
