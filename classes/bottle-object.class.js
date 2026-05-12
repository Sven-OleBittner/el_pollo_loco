class BottleObject extends CollectibleObject {
  offset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };

  constructor(imagePath) {
    super().loadImage(imagePath);
    this.x = 500 + Math.random() * 1400; // Random x position between 500 and 1900
    this.y = 365;
    this.width = 50;
    this.height = 60;
  }

}
