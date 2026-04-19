class BackgroundObject extends MovableObject {
  constructor(objectPath, x) {
    super().loadImage(objectPath);
    this.height = 480;
    this.width = 720;
    this.x = x;
    this.y = 0;
  }
}
