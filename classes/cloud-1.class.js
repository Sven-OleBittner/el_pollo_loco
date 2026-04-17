class Cloud1 extends MovableObject {
  y = -20;
  width = 720;
  height = 480;

  constructor() {
    super().loadImage(`./img/5_background/layers/4_clouds/1.png`);
    this.x = -100 + Math.random() * 800;
    this.moveCloud();
  }

  moveCloud() {
    setInterval(() => {
      this.x -= 0.15;
    }, 1000 / 60);
  }
}
