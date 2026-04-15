class LittleChicken extends MovableObject {
  height = 50;
  width = 35;
  y = 375;

  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_small/1_walk/1_w.png`);
    this.x = 200 + Math.random() * 500;
  }

  movingEnemy() {
    setInterval(() => {
      this.moveLeft(this);
    }, 1000 / 60);
  }
}