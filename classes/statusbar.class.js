class StatusBar extends DrawableObject {
  x;
  y;
  width = 175;
  height = 50;

  STAUSBAR_HEALTH = [
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  STAUSBAR_COIN = [
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  STAUSBAR_BOTTLE = [
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
  ];

  BOSSBAR_HEALTH = [
    "./img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
    "./img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
    "./img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
    "./img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
    "./img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
    "./img/7_statusbars/2_statusbar_endboss/orange/orange100.png",
  ];

  constructor(world) {
    super();
    this.world = world;
    this.character = this.world.character;
    this.x = 20;
    this.loadImages(this.BOSSBAR_HEALTH);
  }

  drawStatusBar(statusbar) {
    let path = this.getPathOfStatusbar(statusbar);
    this.img = this.imgCache[path];
  }

  getPathOfStatusbar(statusbar) {
    switch (statusbar) {
      case "healthbar":
        return this.STAUSBAR_HEALTH[this.character.health / 20];
      case "bottlebar":
        return this.STAUSBAR_BOTTLE[this.character.bottles];
      case "coinbar":
        return this.STAUSBAR_COIN[this.character.coins / 20];
    }
  }
}
