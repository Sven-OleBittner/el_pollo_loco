class BackgroundObject extends MovableObject {
  constructor(objectPath) {
    super().loadImage(objectPath);
    this.height = 480;
    this.width = 720;
    this.x = 0;
    this.y = 0;
  }
}
