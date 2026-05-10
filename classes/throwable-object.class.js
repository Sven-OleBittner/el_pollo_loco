class ThrowableObject extends MovableObject {
  height = 70;
  width = 50;

  IMAGES_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(world, x, y) {
    super();
    this.world = world;
    this.x = x + 40;
    this.y = y + 140;
    this.checkBottleCount(this.x, this.y);
  }

  throwBottle(x, y) {
    this.loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 15;
    }, 1000 / 25);
  }

  checkBottleCount(x, y) {
    if (this.world.character.bottles >= 1) {
      this.throwBottle(x, y);
      this.throwBottleAnimation();
      this.world.character.bottles -= 1;
      this.world.bottleBarPepe.drawStatusBar("bottlebar");
      console.log("bottle count: " + this.world.character.bottles);
    } else {
      console.log("No more bottles left!");
      return;
    }
  }

  throwBottleAnimation() {
    setInterval(() => {
      this.loadImages(this.IMAGES_ROTATION);
      this.playAnimation(this.IMAGES_ROTATION);
    }, 100);
  }
}
