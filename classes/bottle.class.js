class Bottle extends MovableObject {
  speedY = 30;
  speedX = 20;
  height = 100;
  width = 100;

  IMAGES_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  constructor(world) {
    super().loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.x = 100;
    this.y = 100;
    this.world = world;

    this.loadImages(this.IMAGES_ROTATION);
    // this.world = world;
  }

  throwBottle() {
    debugger;

    this.world.addToMap(this);
    this.y ;
    this.x ;
    this.world.character.bottles -= 20;
    this.world.bottleBarPepe.drawStatusBar("bottlebar");
    this.playAnimation(this.IMAGES_ROTATION);
  }
}
