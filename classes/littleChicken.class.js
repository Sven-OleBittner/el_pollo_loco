class LittleChicken extends MovableObject {
  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_small/1_walk/1_w.png`);
    this.height = 50;
    this.width = 35;
    this.x = 200 + Math.random() * 500;
    this.y = 375;
  }

  movingEnemy() {
    setInterval(() => {
      this.moveLeft(this);
    }, 1000 / 60);
  }
}