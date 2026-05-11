class Endboss extends MovableObject {
  height = 500;
  width = 250;
  y = -50;
  world;
  speed = Math.random() * 2 + 3;
  offset = {
    top: 100,
    left: 50,
    right: 50,
    bottom: 50,
  }

  IMAGES_ALERT = [
    "./img/4_enemie_boss_chicken/2_alert/G5.png",
    "./img/4_enemie_boss_chicken/2_alert/G6.png",
    "./img/4_enemie_boss_chicken/2_alert/G7.png",
    "./img/4_enemie_boss_chicken/2_alert/G8.png",
    "./img/4_enemie_boss_chicken/2_alert/G9.png",
    "./img/4_enemie_boss_chicken/2_alert/G10.png",
    "./img/4_enemie_boss_chicken/2_alert/G11.png",
    "./img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_WALKING = [
    "./img/4_enemie_boss_chicken/1_walk/G1.png",
    "./img/4_enemie_boss_chicken/1_walk/G2.png",
    "./img/4_enemie_boss_chicken/1_walk/G3.png",
    "./img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_ALERT[0]);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 2000;
     //this.animate();
    this.walking();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_ALERT);
    }, 175);
  }

  walking() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
      this.x -= this.speed;
    }, 255);
  }
}