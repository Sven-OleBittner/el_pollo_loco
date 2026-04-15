class BigChicken extends MovableObject {
  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
    this.height = 90;
    this.width = 55;
    this.x = 200 + Math.random() * 500;
    this.y = 340;
  }

  movingEnemy() {
    setInterval(() => {
      this.moveLeft(this);
    }, 1000 / 60);
  }
}
