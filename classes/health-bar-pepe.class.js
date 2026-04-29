class HealthBarPepe extends StatusBar {

    
  constructor(world) {
    super(world);
    this.y = 0;
    this.loadImages(this.STAUSBAR_HEALTH);
    this.drawStatusBar("healthbar");
  }
}
