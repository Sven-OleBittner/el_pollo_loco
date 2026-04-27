class StatusBar extends DrawableObject {
  constructor(world, ctx) {
    super();
    this.world = world;
    this.character = this.world.character;
    this.ctx = ctx;
    // this.drawStatusBar("healthbar", -60, 5);
    // this.drawStatusBar("bottlebar", -60, 40);
    // this.drawStatusBar("coinbar", -60, 95);
  }

  drawStatusBar(statusbar, x, y) {
    let path = this.getPathOfStatusbar(statusbar);
    let img = this.character.imgCache[path];
    this.ctx.drawImage(img, x, y, 200, 60);
  }

  getPathOfStatusbar(statusbar) {
    switch (statusbar) {
      case "healthbar":
        return this.character.STAUSBAR_HEALTH[
          this.character.health / 20
        ];
      case "bottlebar":
        return this.character.STAUSBAR_BOTTLE[
          this.character.bottles / 20
        ];
      case "coinbar":
        return this.character.STAUSBAR_COIN[
          this.character.coins / 20
        ];
    }
  }
}
