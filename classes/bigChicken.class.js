class BigChicken extends MovableObject {
  height = 90;
  width = 55;
  y = 340;
  
  constructor() {
    super().loadImage(`./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`);
    this.x = 200 + Math.random() * 500;
  }

  movingEnemy() {
    setInterval(() => {
      this.moveLeft(this);
    }, 1000 / 60);
  }
}
