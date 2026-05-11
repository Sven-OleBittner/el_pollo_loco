class BottleObject extends CollectibleObject {
  offset = {
    top: 10,
    left: 5,
    right: 5,
    bottom: 5,
  };

  BOTTLE_IMAGES = [
    "./img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "./img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  constructor() {
    super().loadImage(this.BOTTLE_IMAGES[0]);
    this.loadImage(this.BOTTLE_IMAGES[1]);
    this.loadImages(this.BOTTLE_IMAGES);
    this.x = 500 + Math.random() * 2000;
    this.y = 360;
    this.width = 50;
    this.height = 60;
  }


}
